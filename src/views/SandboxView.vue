<template>
  <div class="sandbox-container">
    <div class="control-bar">
      <h2>数字沙盘 - 3D中国城市热点立体视图</h2>
      <div class="control-actions">
        <div class="live-indicator" :class="{ active: isLive }">
          <span class="live-dot"></span>
          <span>{{ isLive ? '实时更新中' : '已暂停' }}</span>
        </div>
        <div class="update-info">
          <span>上次更新: {{ lastUpdateTime }}</span>
        </div>
        <button class="toggle-btn" @click="toggleLive">
          {{ isLive ? '暂停' : '开始' }}
        </button>
        <button class="refresh-btn" @click="refreshData">
          <span class="refresh-icon" :class="{ spinning: isRefreshing }">↻</span>
          刷新
        </button>
      </div>
    </div>
    
    <div class="news-ticker">
      <div class="ticker-label">📰 实时热点</div>
      <div class="ticker-content">
        <div class="ticker-scroll" :style="{ animationPlayState: isLive ? 'running' : 'paused' }">
          <span v-for="(news, index) in newsList" :key="index" class="news-item" @click="showNewsDetail(news)">
            <span class="news-category" :class="news.category">{{ news.categoryText }}</span>
            <span class="news-title">{{ news.title }}</span>
            <span class="news-views">👁️ {{ news.views }}万</span>
          </span>
        </div>
      </div>
    </div>
    
    <div class="sandbox-content">
      <div class="sandbox-main">
        <div ref="chartRef" class="chart-container"></div>
        <div class="chart-overlay">
          <div class="overlay-title">CityPulse 城市热点监测</div>
          <div class="overlay-subtitle">实时数据 · 全国覆盖 · 3D可视化</div>
        </div>
        
        <div class="hot-search-panel">
          <div class="hot-search-header">
            <span class="hot-icon">🔥</span>
            <span>热搜榜</span>
            <span class="update-time">{{ hotSearchTime }}</span>
          </div>
          <div class="hot-search-list">
            <div v-for="(item, index) in hotSearchList" :key="index" class="hot-search-item" :class="'rank-' + (index + 1)">
              <span class="hot-rank">{{ index + 1 }}</span>
              <span class="hot-title">{{ item.title }}</span>
              <span class="hot-heat">{{ item.heat }}</span>
              <span class="hot-trend" :class="item.trend > 0 ? 'up' : 'down'">
                {{ item.trend > 0 ? '↑' : '↓' }}{{ Math.abs(item.trend) }}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="sandbox-panel">
        <div class="panel-section">
          <h3>🔥 热点排名 TOP 10</h3>
          <div class="city-list">
            <div v-for="(city, index) in topCities" :key="city.name" class="city-item" :class="'rank-' + (index + 1)">
              <div class="city-rank">{{ index + 1 }}</div>
              <div class="city-info">
                <span class="city-name">{{ city.name }}</span>
                <span class="city-value" :style="{ color: getColor(city.value) }">
                  {{ city.value }}
                </span>
              </div>
              <div class="city-bar">
                <div 
                  class="city-bar-fill" 
                  :style="{ 
                    width: (city.value / maxValue * 100) + '%',
                    backgroundColor: getColor(city.value)
                  }"
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="panel-section">
          <h3>📊 实时统计</h3>
          <div class="stats-grid">
            <div class="stat-item">
              <span class="stat-label">监测城市</span>
              <span class="stat-value">{{ cityData.length }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">平均热度</span>
              <span class="stat-value">{{ averageValue }}</span>
            </div>
            <div class="stat-item highlight">
              <span class="stat-label">最高热度</span>
              <span class="stat-value" style="color: #ff4757;">{{ maxValue }}</span>
              <span class="stat-city">{{ topCities[0]?.name }}</span>
            </div>
            <div class="stat-item">
              <span class="stat-label">最低热度</span>
              <span class="stat-value" style="color: #2ed573;">{{ minValue }}</span>
              <span class="stat-city">{{ bottomCity?.name }}</span>
            </div>
          </div>
        </div>
        
        <div class="panel-section">
          <h3>🎨 图例说明</h3>
          <div class="legend">
            <div class="legend-item">
              <div class="legend-color hot"></div>
              <span>高热点区域 (150+)</span>
            </div>
            <div class="legend-item">
              <div class="legend-color medium-high"></div>
              <span>中高热点 (100-150)</span>
            </div>
            <div class="legend-item">
              <div class="legend-color medium"></div>
              <span>中热点区域 (60-100)</span>
            </div>
            <div class="legend-item">
              <div class="legend-color low"></div>
              <span>低热点区域 (0-60)</span>
            </div>
          </div>
        </div>
        
        <div class="panel-section">
          <h3>⚙️ 视角控制</h3>
          <div class="view-controls">
            <button @click="resetView" class="view-btn">重置视角</button>
            <button @click="autoRotate" class="view-btn">{{ isAutoRotate ? '停止旋转' : '自动旋转' }}</button>
          </div>
          <div class="height-explain">
            <p>💡 热点值越高，城市地块上升越高</p>
            <p>🖱️ 左键旋转 · 滚轮缩放 · 右键平移</p>
          </div>
        </div>
      </div>
    </div>
    
    <div v-if="selectedNews" class="news-modal" @click="selectedNews = null">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <span class="modal-category" :class="selectedNews.category">{{ selectedNews.categoryText }}</span>
          <h3>{{ selectedNews.title }}</h3>
          <button class="modal-close" @click="selectedNews = null">×</button>
        </div>
        <div class="modal-body">
          <div class="modal-stats">
            <span>👁️ 浏览量: {{ selectedNews.views }}万</span>
            <span>💬 评论: {{ selectedNews.comments }}</span>
            <span>🔄 转发: {{ selectedNews.shares }}</span>
          </div>
          <div class="modal-region">
            <span>📍 热点区域: {{ selectedNews.region }}</span>
          </div>
          <p class="modal-desc">{{ selectedNews.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import * as echarts from 'echarts'
import 'echarts-gl'

const chartRef = ref<HTMLElement | null>(null)
let chart: echarts.ECharts | null = null
let updateTimer: number | null = null

const isLive = ref(true)
const isRefreshing = ref(false)
const isAutoRotate = ref(false)
const lastUpdateTime = ref('--:--:--')
const hotSearchTime = ref('--:--:--')
const selectedNews = ref<any>(null)

const newsList = ref([
  { title: '北京朝阳区突发交通管制，多条道路临时封闭', category: 'traffic', categoryText: '交通', views: 156, comments: 234, shares: 89, region: '北京', description: '因道路施工需要，朝阳区多条主干道实施临时交通管制，预计持续3小时。' },
  { title: '上海浦东新区商圈人流达到峰值，建议错峰出行', category: 'crowd', categoryText: '人流', views: 98, comments: 156, shares: 45, region: '上海', description: '浦东新区主要商圈人流密集，建议市民错峰出行，避开高峰时段。' },
  { title: '广州天河区发现疑似环境污染问题，已启动调查', category: 'environment', categoryText: '环境', views: 234, comments: 567, shares: 123, region: '广州', description: '天河区某工业园区附近发现异常气味，环保部门已介入调查。' },
  { title: '深圳南山区科技园举办大型招聘会，吸引万人参与', category: 'event', categoryText: '活动', views: 67, comments: 89, shares: 34, region: '深圳', description: '南山区科技园举办年度大型招聘会，超过200家企业参与。' },
  { title: '成都春熙路商圈开展促销活动，客流激增', category: 'crowd', categoryText: '人流', views: 45, comments: 78, shares: 23, region: '成都', description: '春熙路商圈开展大型促销活动，吸引大量市民前往购物。' },
  { title: '杭州西湖景区游客量突破历史同期记录', category: 'crowd', categoryText: '人流', views: 189, comments: 345, shares: 167, region: '杭州', description: '西湖景区游客量持续攀升，建议游客错峰游览。' },
  { title: '武汉江汉路步行街实施人流管控措施', category: 'traffic', categoryText: '交通', views: 78, comments: 123, shares: 56, region: '武汉', description: '因人流过大，江汉路步行街实施临时管控措施。' },
  { title: '南京新街口商圈开展夜间经济活动', category: 'event', categoryText: '活动', views: 56, comments: 89, shares: 34, region: '南京', description: '新街口商圈推出夜间经济系列活动，丰富市民夜生活。' }
])

const hotSearchTitles = [
  '全国多地迎来降温天气',
  '城市交通拥堵指数创新高',
  '热门景区游客量预警',
  '新能源车充电桩建设加速',
  '城市绿化覆盖率提升',
  '智慧城市建设新进展',
  '社区便民服务升级',
  '城市空气质量改善',
  '地铁新线路即将开通',
  '商圈促销活动火爆',
  '高校毕业季就业指导',
  '医疗保障政策更新',
  '城市垃圾分类新规',
  '公共交通票价调整',
  '历史文化街区改造',
  '科技创新成果展示',
  '体育赛事精彩纷呈',
  '美食节活动开幕',
  '文化艺术展览举办',
  '城市夜景灯光秀'
]

const hotSearchList = ref([
  { title: '全国多地迎来降温天气', heat: 9876543, trend: 15 },
  { title: '城市交通拥堵指数创新高', heat: 8765432, trend: 23 },
  { title: '热门景区游客量预警', heat: 7654321, trend: -5 },
  { title: '新能源车充电桩建设加速', heat: 6543210, trend: 8 },
  { title: '城市绿化覆盖率提升', heat: 5432109, trend: 3 },
  { title: '智慧城市建设新进展', heat: 4321098, trend: 12 },
  { title: '社区便民服务升级', heat: 3210987, trend: -2 },
  { title: '城市空气质量改善', heat: 2109876, trend: 6 }
])

const updateHotSearchList = () => {
  const shuffled = [...hotSearchTitles].sort(() => Math.random() - 0.5)
  hotSearchList.value = shuffled.slice(0, 8).map((title, index) => ({
    title,
    heat: Math.floor(Math.random() * 8000000) + 1000000,
    trend: Math.floor(Math.random() * 30) - 10
  })).sort((a, b) => b.heat - a.heat)
}

const showNewsDetail = (news: any) => {
  selectedNews.value = news
}

const baseCityData = [
  { name: '北京', baseValue: 180, coord: [116.4074, 39.9042] },
  { name: '上海', baseValue: 175, coord: [121.4737, 31.2304] },
  { name: '广州', baseValue: 165, coord: [113.2644, 23.1291] },
  { name: '深圳', baseValue: 160, coord: [114.0579, 22.5431] },
  { name: '天津', baseValue: 145, coord: [117.3616, 39.3434] },
  { name: '重庆', baseValue: 140, coord: [106.5516, 29.5630] },
  { name: '成都', baseValue: 135, coord: [104.0668, 30.5728] },
  { name: '杭州', baseValue: 130, coord: [120.1551, 30.2741] },
  { name: '武汉', baseValue: 125, coord: [114.3055, 30.5928] },
  { name: '西安', baseValue: 120, coord: [108.9398, 34.3416] },
  { name: '南京', baseValue: 115, coord: [118.7969, 32.0603] },
  { name: '苏州', baseValue: 110, coord: [120.5853, 31.2994] },
  { name: '郑州', baseValue: 105, coord: [113.6254, 34.7466] },
  { name: '长沙', baseValue: 100, coord: [112.9388, 28.2282] },
  { name: '青岛', baseValue: 95, coord: [120.3826, 36.0671] },
  { name: '大连', baseValue: 90, coord: [121.6147, 38.9140] },
  { name: '宁波', baseValue: 85, coord: [121.5440, 29.8683] },
  { name: '厦门', baseValue: 80, coord: [118.0894, 24.4798] },
  { name: '济南', baseValue: 75, coord: [117.0009, 36.6758] },
  { name: '哈尔滨', baseValue: 70, coord: [126.5349, 45.8038] },
  { name: '长春', baseValue: 65, coord: [125.3245, 43.8868] },
  { name: '福州', baseValue: 60, coord: [119.3062, 26.0753] },
  { name: '合肥', baseValue: 55, coord: [117.2272, 31.8206] },
  { name: '昆明', baseValue: 50, coord: [102.8329, 24.8801] },
  { name: '南昌', baseValue: 45, coord: [115.8581, 28.6829] },
  { name: '贵阳', baseValue: 40, coord: [106.7135, 26.5783] },
  { name: '太原', baseValue: 35, coord: [112.5489, 37.8706] },
  { name: '南宁', baseValue: 30, coord: [108.3200, 22.8240] },
  { name: '兰州', baseValue: 25, coord: [103.8343, 36.0611] },
  { name: '乌鲁木齐', baseValue: 20, coord: [87.6177, 43.7928] },
  { name: '呼和浩特', baseValue: 15, coord: [111.6708, 40.8183] },
  { name: '银川', baseValue: 12, coord: [106.2586, 38.4680] },
  { name: '西宁', baseValue: 10, coord: [101.7782, 36.6171] },
  { name: '海口', baseValue: 8, coord: [110.1999, 20.0444] },
  { name: '拉萨', baseValue: 5, coord: [91.1322, 29.6600] },
  { name: '沈阳', baseValue: 68, coord: [123.4328, 41.8051] },
  { name: '无锡', baseValue: 82, coord: [120.3119, 31.4912] },
  { name: '佛山', baseValue: 78, coord: [113.1227, 23.0288] },
  { name: '东莞', baseValue: 72, coord: [113.7463, 23.0460] },
  { name: '泉州', baseValue: 68, coord: [118.6754, 24.8741] },
  { name: '温州', baseValue: 65, coord: [120.6994, 28.0014] },
  { name: '烟台', baseValue: 62, coord: [121.4479, 37.4638] },
  { name: '唐山', baseValue: 58, coord: [118.1802, 39.6309] },
  { name: '石家庄', baseValue: 55, coord: [114.5149, 38.0428] },
  { name: '南通', baseValue: 52, coord: [120.8944, 31.9802] },
  { name: '常州', baseValue: 48, coord: [119.9742, 31.8112] },
  { name: '潍坊', baseValue: 45, coord: [119.1619, 36.7068] },
  { name: '绍兴', baseValue: 42, coord: [120.5821, 30.0120] },
  { name: '台州', baseValue: 38, coord: [121.4286, 28.6628] },
  { name: '嘉兴', baseValue: 35, coord: [120.7509, 30.7627] },
  { name: '金华', baseValue: 32, coord: [119.6495, 29.0895] },
  { name: '湖州', baseValue: 28, coord: [120.0868, 30.8673] },
  { name: '徐州', baseValue: 25, coord: [117.1848, 34.2618] },
  { name: '扬州', baseValue: 22, coord: [119.4216, 32.3932] },
  { name: '镇江', baseValue: 18, coord: [119.4552, 32.2044] },
  { name: '泰州', baseValue: 15, coord: [119.9225, 32.4556] },
  { name: '淮安', baseValue: 12, coord: [119.1142, 33.5994] },
  { name: '盐城', baseValue: 10, coord: [120.1399, 33.3777] },
  { name: '连云港', baseValue: 8, coord: [119.2216, 34.5967] },
  { name: '宿迁', baseValue: 5, coord: [118.5535, 33.7772] },
  { name: '淄博', baseValue: 42, coord: [118.0479, 36.8134] },
  { name: '临沂', baseValue: 38, coord: [118.3515, 35.1042] },
  { name: '济宁', baseValue: 35, coord: [116.5871, 35.4154] },
  { name: '菏泽', baseValue: 30, coord: [115.4807, 35.2339] },
  { name: '德州', baseValue: 25, coord: [116.3575, 36.4345] },
  { name: '聊城', baseValue: 22, coord: [115.9845, 36.4558] },
  { name: '滨州', baseValue: 18, coord: [117.9683, 37.4015] },
  { name: '东营', baseValue: 15, coord: [118.6747, 37.4345] },
  { name: '威海', baseValue: 12, coord: [122.1204, 37.5134] },
  { name: '日照', baseValue: 10, coord: [119.5273, 35.4165] },
  { name: '枣庄', baseValue: 8, coord: [117.3235, 34.8105] },
  { name: '保定', baseValue: 48, coord: [115.4647, 38.8739] },
  { name: '邯郸', baseValue: 42, coord: [114.5388, 36.6256] },
  { name: '秦皇岛', baseValue: 38, coord: [119.6005, 39.9425] },
  { name: '邢台', baseValue: 32, coord: [114.5046, 37.0458] },
  { name: '张家口', baseValue: 28, coord: [114.8875, 40.7675] },
  { name: '承德', baseValue: 22, coord: [117.9239, 40.4318] },
  { name: '沧州', baseValue: 18, coord: [116.8386, 38.3042] },
  { name: '廊坊', baseValue: 15, coord: [116.6837, 39.5381] },
  { name: '衡水', baseValue: 12, coord: [115.6738, 37.7350] },
  { name: '大同', baseValue: 10, coord: [113.3001, 40.0894] },
  { name: '阳泉', baseValue: 8, coord: [113.5807, 37.8520] },
  { name: '长治', baseValue: 6, coord: [113.1163, 36.1952] },
  { name: '晋城', baseValue: 5, coord: [112.8513, 35.4907] },
  { name: '鞍山', baseValue: 38, coord: [122.9946, 41.1088] },
  { name: '抚顺', baseValue: 32, coord: [123.9572, 41.8772] },
  { name: '本溪', baseValue: 28, coord: [123.7675, 41.2942] },
  { name: '丹东', baseValue: 22, coord: [124.3542, 40.0014] },
  { name: '锦州', baseValue: 18, coord: [121.0707, 41.0992] },
  { name: '营口', baseValue: 15, coord: [122.2352, 40.6676] },
  { name: '阜新', baseValue: 12, coord: [121.6708, 42.0118] },
  { name: '辽阳', baseValue: 10, coord: [123.2369, 41.2405] },
  { name: '盘锦', baseValue: 8, coord: [122.0696, 41.1242] },
  { name: '铁岭', baseValue: 6, coord: [123.8445, 42.2905] },
  { name: '朝阳', baseValue: 5, coord: [120.4537, 41.5760] },
  { name: '葫芦岛', baseValue: 4, coord: [120.8569, 40.7557] },
  { name: '吉林', baseValue: 12, coord: [126.5496, 43.8378] },
  { name: '通化', baseValue: 10, coord: [125.9396, 41.7212] },
  { name: '白山', baseValue: 8, coord: [126.4270, 41.9425] },
  { name: '松原', baseValue: 6, coord: [124.8260, 45.1412] },
  { name: '白城', baseValue: 4, coord: [122.8411, 45.6396] },
  { name: '齐齐哈尔', baseValue: 32, coord: [123.9180, 47.3528] },
  { name: '牡丹江', baseValue: 28, coord: [129.6186, 44.5828] },
  { name: '佳木斯', baseValue: 22, coord: [130.3616, 46.8096] },
  { name: '大庆', baseValue: 18, coord: [125.1040, 46.5868] },
  { name: '鸡西', baseValue: 15, coord: [130.9697, 45.2950] },
  { name: '鹤岗', baseValue: 12, coord: [130.2977, 47.3520] },
  { name: '双鸭山', baseValue: 10, coord: [131.1571, 46.6435] },
  { name: '伊春', baseValue: 8, coord: [128.8994, 47.7247] },
  { name: '绥化', baseValue: 6, coord: [126.9689, 46.6376] },
  { name: '黑河', baseValue: 4, coord: [127.4998, 50.2496] },
  { name: '衢州', baseValue: 28, coord: [118.8590, 28.9700] },
  { name: '丽水', baseValue: 22, coord: [119.9218, 28.4519] },
  { name: '舟山', baseValue: 18, coord: [122.2072, 29.9855] },
  { name: '黄山', baseValue: 15, coord: [118.3173, 29.7092] },
  { name: '安庆', baseValue: 12, coord: [117.0635, 30.5228] },
  { name: '芜湖', baseValue: 10, coord: [118.3762, 31.3263] },
  { name: '马鞍山', baseValue: 8, coord: [118.5069, 31.6704] },
  { name: '铜陵', baseValue: 6, coord: [117.8121, 30.9455] },
  { name: '淮南', baseValue: 5, coord: [116.9997, 32.6255] },
  { name: '淮北', baseValue: 4, coord: [116.7947, 33.9717] },
  { name: '蚌埠', baseValue: 3, coord: [117.3632, 32.9397] },
  { name: '阜阳', baseValue: 2, coord: [115.8205, 32.9012] },
  { name: '漳州', baseValue: 38, coord: [117.6472, 24.5129] },
  { name: '莆田', baseValue: 32, coord: [119.0078, 25.4541] },
  { name: '宁德', baseValue: 28, coord: [119.5472, 26.6266] },
  { name: '南平', baseValue: 22, coord: [118.1784, 26.6356] },
  { name: '三明', baseValue: 18, coord: [117.6389, 26.2634] },
  { name: '龙岩', baseValue: 15, coord: [117.0171, 25.0783] },
  { name: '九江', baseValue: 42, coord: [115.9928, 29.7120] },
  { name: '景德镇', baseValue: 35, coord: [117.1784, 29.2687] },
  { name: '萍乡', baseValue: 28, coord: [113.8522, 27.6229] },
  { name: '新余', baseValue: 22, coord: [114.9167, 27.8173] },
  { name: '鹰潭', baseValue: 18, coord: [117.0692, 28.2386] },
  { name: '赣州', baseValue: 15, coord: [114.9353, 25.8315] },
  { name: '吉安', baseValue: 12, coord: [114.9861, 27.1137] },
  { name: '宜春', baseValue: 10, coord: [114.4166, 27.8155] },
  { name: '抚州', baseValue: 8, coord: [116.3583, 27.9492] },
  { name: '上饶', baseValue: 5, coord: [117.9435, 28.4544] },
  { name: '洛阳', baseValue: 62, coord: [112.4539, 34.6197] },
  { name: '开封', baseValue: 55, coord: [114.3076, 34.7975] },
  { name: '安阳', baseValue: 48, coord: [114.3881, 36.0996] },
  { name: '新乡', baseValue: 42, coord: [113.9268, 35.3026] },
  { name: '焦作', baseValue: 38, coord: [113.2383, 35.2159] },
  { name: '许昌', baseValue: 32, coord: [113.8522, 34.0357] },
  { name: '平顶山', baseValue: 28, coord: [113.1927, 33.7662] },
  { name: '信阳', baseValue: 22, coord: [114.0919, 32.1470] },
  { name: '南阳', baseValue: 18, coord: [112.5285, 32.9908] },
  { name: '商丘', baseValue: 15, coord: [115.6505, 34.4370] },
  { name: '周口', baseValue: 12, coord: [114.6968, 33.6258] },
  { name: '驻马店', baseValue: 10, coord: [114.0223, 32.9802] },
  { name: '漯河', baseValue: 8, coord: [114.0461, 33.5760] },
  { name: '宜昌', baseValue: 58, coord: [111.2909, 30.6918] },
  { name: '襄阳', baseValue: 52, coord: [112.1226, 32.0089] },
  { name: '荆州', baseValue: 48, coord: [112.2397, 30.3352] },
  { name: '荆门', baseValue: 42, coord: [112.2044, 31.0354] },
  { name: '鄂州', baseValue: 38, coord: [114.8949, 30.3844] },
  { name: '孝感', baseValue: 32, coord: [113.9167, 30.9262] },
  { name: '黄冈', baseValue: 28, coord: [114.8722, 30.4477] },
  { name: '黄石', baseValue: 22, coord: [115.0386, 30.1997] },
  { name: '咸宁', baseValue: 18, coord: [114.3227, 29.8414] },
  { name: '随州', baseValue: 15, coord: [113.3826, 31.6902] },
  { name: '十堰', baseValue: 12, coord: [110.7879, 32.6290] },
  { name: '株洲', baseValue: 58, coord: [113.1339, 27.8274] },
  { name: '湘潭', baseValue: 52, coord: [112.9440, 27.8297] },
  { name: '衡阳', baseValue: 48, coord: [112.5720, 26.8932] },
  { name: '岳阳', baseValue: 42, coord: [113.1329, 29.3703] },
  { name: '常德', baseValue: 38, coord: [111.6986, 29.0317] },
  { name: '张家界', baseValue: 32, coord: [110.4792, 29.1170] },
  { name: '益阳', baseValue: 28, coord: [112.3552, 28.5539] },
  { name: '郴州', baseValue: 22, coord: [113.0317, 25.7832] },
  { name: '永州', baseValue: 18, coord: [111.6132, 26.4204] },
  { name: '怀化', baseValue: 15, coord: [109.9985, 27.5494] },
  { name: '娄底', baseValue: 12, coord: [111.9937, 27.6998] },
  { name: '邵阳', baseValue: 10, coord: [111.4677, 27.2390] },
  { name: '珠海', baseValue: 58, coord: [113.5539, 22.2247] },
  { name: '汕头', baseValue: 52, coord: [116.6824, 23.3535] },
  { name: '韶关', baseValue: 42, coord: [113.5915, 24.8013] },
  { name: '湛江', baseValue: 38, coord: [110.3645, 21.2749] },
  { name: '肇庆', baseValue: 32, coord: [112.4716, 23.0515] },
  { name: '江门', baseValue: 28, coord: [113.0949, 22.5751] },
  { name: '茂名', baseValue: 22, coord: [110.9252, 21.6628] },
  { name: '惠州', baseValue: 18, coord: [114.4161, 23.1115] },
  { name: '梅州', baseValue: 15, coord: [116.1176, 24.2888] },
  { name: '汕尾', baseValue: 12, coord: [115.3647, 22.7834] },
  { name: '河源', baseValue: 10, coord: [114.6978, 23.7463] },
  { name: '阳江', baseValue: 8, coord: [111.9822, 21.8579] },
  { name: '清远', baseValue: 6, coord: [113.0515, 23.7022] },
  { name: '中山', baseValue: 5, coord: [113.3839, 22.5211] },
  { name: '潮州', baseValue: 4, coord: [116.6227, 23.6566] },
  { name: '揭阳', baseValue: 3, coord: [116.3728, 23.5498] },
  { name: '云浮', baseValue: 2, coord: [112.0439, 22.9152] },
  { name: '柳州', baseValue: 48, coord: [109.4286, 24.3263] },
  { name: '桂林', baseValue: 42, coord: [110.1799, 25.2345] },
  { name: '梧州', baseValue: 35, coord: [111.2791, 23.4769] },
  { name: '北海', baseValue: 28, coord: [109.1199, 21.4733] },
  { name: '防城港', baseValue: 22, coord: [108.3538, 21.6147] },
  { name: '钦州', baseValue: 18, coord: [108.6542, 21.9742] },
  { name: '贵港', baseValue: 15, coord: [109.5989, 23.1113] },
  { name: '玉林', baseValue: 12, coord: [110.1812, 22.6540] },
  { name: '百色', baseValue: 8, coord: [106.6182, 23.9023] },
  { name: '三亚', baseValue: 42, coord: [109.5083, 18.2479] },
  { name: '三沙', baseValue: 35, coord: [112.3387, 16.8313] },
  { name: '儋州', baseValue: 28, coord: [109.5768, 19.5175] },
  { name: '琼海', baseValue: 22, coord: [110.4745, 19.2584] },
  { name: '文昌', baseValue: 18, coord: [110.7979, 19.5432] },
  { name: '万宁', baseValue: 15, coord: [110.3888, 18.7958] },
  { name: '绵阳', baseValue: 58, coord: [104.6794, 31.4670] },
  { name: '德阳', baseValue: 52, coord: [104.3979, 31.1270] },
  { name: '攀枝花', baseValue: 48, coord: [101.7186, 26.5807] },
  { name: '广元', baseValue: 42, coord: [105.8438, 32.4354] },
  { name: '遂宁', baseValue: 38, coord: [105.5928, 30.5328] },
  { name: '内江', baseValue: 32, coord: [105.0586, 29.5803] },
  { name: '乐山', baseValue: 28, coord: [103.7656, 29.5520] },
  { name: '南充', baseValue: 22, coord: [106.1107, 30.8378] },
  { name: '眉山', baseValue: 18, coord: [103.8485, 30.0758] },
  { name: '宜宾', baseValue: 15, coord: [104.6430, 28.7517] },
  { name: '达州', baseValue: 12, coord: [107.5021, 31.2096] },
  { name: '六盘水', baseValue: 48, coord: [104.8460, 26.5948] },
  { name: '遵义', baseValue: 42, coord: [106.9373, 27.7083] },
  { name: '安顺', baseValue: 38, coord: [105.9476, 25.9316] },
  { name: '毕节', baseValue: 32, coord: [105.2848, 27.3019] },
  { name: '铜仁', baseValue: 28, coord: [109.1916, 27.7311] },
  { name: '曲靖', baseValue: 52, coord: [103.7967, 25.4900] },
  { name: '玉溪', baseValue: 48, coord: [102.5460, 24.3527] },
  { name: '保山', baseValue: 42, coord: [99.1617, 25.1120] },
  { name: '昭通', baseValue: 38, coord: [103.7173, 27.3380] },
  { name: '丽江', baseValue: 32, coord: [100.2259, 26.8552] },
  { name: '大理', baseValue: 18, coord: [100.2658, 25.6894] },
  { name: '日喀则', baseValue: 22, coord: [88.8851, 29.2670] },
  { name: '昌都', baseValue: 18, coord: [97.1785, 31.1369] },
  { name: '宝鸡', baseValue: 52, coord: [107.2381, 34.3616] },
  { name: '咸阳', baseValue: 48, coord: [108.7093, 34.3296] },
  { name: '渭南', baseValue: 42, coord: [109.5097, 34.5024] },
  { name: '铜川', baseValue: 38, coord: [108.9450, 34.8960] },
  { name: '延安', baseValue: 32, coord: [109.4908, 36.5965] },
  { name: '榆林', baseValue: 28, coord: [109.7341, 38.2853] },
  { name: '汉中', baseValue: 22, coord: [107.0238, 33.0677] },
  { name: '安康', baseValue: 18, coord: [109.0293, 32.6852] },
  { name: '嘉峪关', baseValue: 42, coord: [98.2773, 39.7723] },
  { name: '金昌', baseValue: 38, coord: [102.1879, 38.5142] },
  { name: '白银', baseValue: 32, coord: [104.1386, 36.5448] },
  { name: '天水', baseValue: 28, coord: [105.7249, 34.5809] },
  { name: '武威', baseValue: 22, coord: [102.6380, 37.9331] },
  { name: '张掖', baseValue: 18, coord: [100.4555, 38.9258] },
  { name: '石嘴山', baseValue: 38, coord: [106.3838, 39.0133] },
  { name: '吴忠', baseValue: 32, coord: [106.1994, 37.9872] },
  { name: '固原', baseValue: 28, coord: [106.2428, 36.0102] },
  { name: '中卫', baseValue: 22, coord: [105.1896, 37.4994] },
  { name: '克拉玛依', baseValue: 42, coord: [84.8695, 45.5795] },
  { name: '吐鲁番', baseValue: 38, coord: [89.1840, 42.9476] },
  { name: '哈密', baseValue: 32, coord: [93.5135, 42.8185] },
  { name: '包头', baseValue: 42, coord: [109.8403, 40.6572] },
  { name: '乌海', baseValue: 35, coord: [106.8256, 39.6542] },
  { name: '赤峰', baseValue: 32, coord: [118.8870, 42.2578] },
  { name: '通辽', baseValue: 28, coord: [122.2434, 43.6174] },
  { name: '鄂尔多斯', baseValue: 22, coord: [109.7813, 39.6086] },
  { name: '呼伦贝尔', baseValue: 18, coord: [119.7582, 49.2122] }
]

const cityData = ref(baseCityData.map(city => ({
  name: city.name,
  value: city.baseValue,
  coord: city.coord,
  baseValue: city.baseValue
})))

const topCities = computed(() => {
  return [...cityData.value].sort((a, b) => b.value - a.value).slice(0, 10)
})

const bottomCity = computed(() => {
  return [...cityData.value].sort((a, b) => a.value - b.value)[0]
})

const maxValue = computed(() => Math.max(...cityData.value.map(c => c.value)))
const minValue = computed(() => Math.min(...cityData.value.map(c => c.value)))
const averageValue = computed(() => {
  const sum = cityData.value.reduce((acc, c) => acc + c.value, 0)
  return Math.round(sum / cityData.value.length)
})

const getColor = (value: number) => {
  if (value >= 150) return '#c62828'
  if (value >= 100) return '#ef6c00'
  if (value >= 60) return '#f9a825'
  if (value >= 30) return '#558b2f'
  return '#00838f'
}

const generateRandomValue = (baseValue: number) => {
  const fluctuation = baseValue * 0.15
  const randomChange = (Math.random() - 0.5) * 2 * fluctuation
  let newValue = baseValue + randomChange
  newValue = Math.max(1, Math.min(200, newValue))
  return Math.round(newValue * 10) / 10
}

const updateData = () => {
  cityData.value = cityData.value.map(city => ({
    ...city,
    value: generateRandomValue(city.baseValue)
  }))
  
  const now = new Date()
  lastUpdateTime.value = now.toLocaleTimeString('zh-CN')
  hotSearchTime.value = now.toLocaleTimeString('zh-CN')
  
  updateHotSearchList()
  
  updateChart()
}

const refreshData = async () => {
  isRefreshing.value = true
  await new Promise(resolve => setTimeout(resolve, 500))
  updateData()
  isRefreshing.value = false
}

const toggleLive = () => {
  isLive.value = !isLive.value
  if (isLive.value) {
    startLiveUpdate()
  } else {
    stopLiveUpdate()
  }
}

const startLiveUpdate = () => {
  if (updateTimer) clearInterval(updateTimer)
  updateTimer = window.setInterval(() => {
    if (isLive.value) {
      updateData()
    }
  }, 300000)
}

const stopLiveUpdate = () => {
  if (updateTimer) {
    clearInterval(updateTimer)
    updateTimer = null
  }
}

const resetView = () => {
  if (chart) {
    chart.setOption({
      geo3D: {
        viewControl: {
          distance: 100,
          alpha: 45,
          beta: 0
        }
      }
    })
  }
}

const autoRotate = () => {
  isAutoRotate.value = !isAutoRotate.value
  if (chart) {
    chart.setOption({
      geo3D: {
        viewControl: {
          autoRotate: isAutoRotate.value,
          autoRotateSpeed: 3
        }
      }
    })
  }
}

const updateChart = () => {
  if (!chart) return
  
  const data = cityData.value.map(city => ({
    name: city.name,
    value: [...city.coord, city.value]
  }))
  
  chart.setOption({
    series: [{
      data: data
    }]
  })
}

const initChart = () => {
  if (!chartRef.value) return
  
  chart = echarts.init(chartRef.value)
  
  const data = cityData.value.map(city => ({
    name: city.name,
    value: [...city.coord, city.value]
  }))
  
  const option: echarts.EChartsOption = {
    backgroundColor: 'transparent',
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0,0,0,0.85)',
      borderColor: '#667eea',
      borderWidth: 1,
      padding: [12, 16],
      textStyle: {
        color: '#fff',
        fontSize: 14
      },
      formatter: (params: any) => {
        if (params.value && params.value.length >= 3) {
          const color = getColor(params.value[2])
          return `
            <div style="font-size:16px;font-weight:bold;margin-bottom:8px;color:${color}">${params.name}</div>
            <div style="display:flex;justify-content:space-between;gap:20px;">
              <span>热点值:</span>
              <span style="font-weight:bold;color:${color}">${params.value[2]}</span>
            </div>
            <div style="display:flex;justify-content:space-between;gap:20px;">
              <span>高度:</span>
              <span style="font-weight:bold;">${Math.round(params.value[2] * 500)}m</span>
            </div>
          `
        }
        return params.name
      }
    },
    visualMap: {
      show: true,
      min: 0,
      max: 200,
      inRange: {
        color: ['#1a237e', '#0d47a1', '#00838f', '#00695c', '#558b2f', '#f9a825', '#ef6c00', '#c62828']
      },
      calculable: true,
      textStyle: {
        color: 'rgba(255,255,255,0.85)',
        fontSize: 12
      },
      right: 20,
      top: 20,
      orient: 'vertical',
      itemWidth: 12,
      itemHeight: 140,
      text: ['高', '低'],
      textGap: 10
    } as any,
    geo3D: {
      map: 'china',
      roam: true,
      regionHeight: 4,
      itemStyle: {
        color: '#1e2a4a',
        opacity: 1,
        borderWidth: 0.8,
        borderColor: 'rgba(100, 180, 255, 0.4)'
      },
      emphasis: {
        itemStyle: {
          color: '#2a4a7a',
          opacity: 1
        },
        label: {
          show: true,
          formatter: (params: any) => params.name || '',
          position: 'top',
          textStyle: {
            color: '#fff',
            fontSize: 14,
            fontWeight: 'bold',
            textBorderColor: 'rgba(0,0,0,0.8)',
            textBorderWidth: 2
          }
        }
      },
      light: {
        main: {
          intensity: 1.2,
          shadow: true,
          shadowQuality: 'high',
          alpha: 35,
          beta: 60
        },
        ambient: {
          intensity: 0.6
        }
      },
      viewControl: {
        distance: 100,
        alpha: 45,
        beta: 0,
        minAlpha: 5,
        maxAlpha: 90,
        autoRotate: false,
        rotateSensitivity: 2,
        zoomSensitivity: 1.5,
        panSensitivity: 2
      },
      shading: 'color',
      temporalSuperSampling: {
        enable: true
      },
      postEffect: {
        enable: true,
        bloom: {
          enable: true,
          intensity: 0.08
        },
        SSAO: {
          enable: true,
          radius: 3,
          intensity: 0.8
        }
      },
      label: {
        show: false
      }
    },
    series: [{
      type: 'bar3D',
      coordinateSystem: 'geo3D',
      data: data,
      shading: 'lambert',
      barSize: 1.8,
      bevel: true,
      bevelSize: 0.3,
      minHeight: 0.5,
      silent: false,
      itemStyle: {
        opacity: 0.95
      },
      label: {
        show: true,
        formatter: (params: any) => {
          return params.value[2] >= 60 ? params.name : ''
        },
        position: 'top',
        textStyle: {
          color: '#fff',
          fontSize: 9,
          fontWeight: 'bold',
          textBorderColor: 'rgba(0,0,0,0.9)',
          textBorderWidth: 2
        }
      },
      emphasis: {
        itemStyle: {
          color: '#ff5722'
        },
        label: {
          show: true,
          formatter: (params: any) => {
            return `${params.name}\n${params.value[2]}`
          },
          textStyle: {
            fontSize: 14
          }
        }
      }
    } as any]
  }
  
  fetch('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then(geoJson => {
      echarts.registerMap('china', geoJson)
      chart?.setOption(option)
      updateData()
    })
    .catch((error) => {
      console.warn('Failed to load map from remote, using fallback:', error)
      fetch('/china.json')
        .then(res => res.json())
        .then(geoJson => {
          echarts.registerMap('china', geoJson)
          chart?.setOption(option)
          updateData()
        })
        .catch(() => {
          echarts.registerMap('china', chinaGeoJson as any)
          chart?.setOption(option)
          updateData()
        })
    })
}

const chinaGeoJson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: { name: '中国' },
      geometry: {
        type: 'Polygon',
        coordinates: [[
          [73.44696, 18.1977],
          [73.44696, 53.5579],
          [134.7685, 53.5579],
          [134.7685, 18.1977],
          [73.44696, 18.1977]
        ]]
      }
    }
  ]
}

const handleResize = () => {
  chart?.resize()
}

onMounted(() => {
  initChart()
  startLiveUpdate()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  stopLiveUpdate()
  window.removeEventListener('resize', handleResize)
  chart?.dispose()
})
</script>

<style scoped>
.sandbox-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 50%, #0f0f2a 100%);
  color: white;
  position: relative;
  overflow: hidden;
}

.sandbox-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: 
    radial-gradient(ellipse at 20% 20%, rgba(102, 126, 234, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 80%, rgba(118, 75, 162, 0.15) 0%, transparent 50%);
  pointer-events: none;
}

.control-bar {
  padding: 12px 20px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(102, 126, 234, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
}

.control-bar h2 {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  background: linear-gradient(90deg, #00d9ff, #00ff88);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.control-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.live-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  background: rgba(255, 71, 87, 0.2);
  border-radius: 20px;
  font-size: 12px;
  color: #ff4757;
}

.live-indicator.active {
  background: rgba(46, 213, 115, 0.2);
  color: #2ed573;
}

.live-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: currentColor;
  animation: pulse 1.5s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.2); }
}

.update-info {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
}

.toggle-btn, .refresh-btn {
  padding: 6px 16px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
}

.toggle-btn {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: white;
}

.toggle-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
}

.refresh-btn {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.refresh-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.refresh-icon {
  display: inline-block;
  transition: transform 0.3s ease;
}

.refresh-icon.spinning {
  animation: spin 0.5s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.news-ticker {
  display: flex;
  align-items: center;
  padding: 8px 20px;
  background: rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid rgba(102, 126, 234, 0.2);
  z-index: 10;
}

.ticker-label {
  font-size: 14px;
  font-weight: 600;
  color: #00d9ff;
  margin-right: 15px;
  white-space: nowrap;
}

.ticker-content {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.ticker-scroll {
  display: flex;
  gap: 40px;
  animation: scroll 30s linear infinite;
}

@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.news-item {
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  cursor: pointer;
  padding: 4px 12px;
  border-radius: 4px;
  transition: background 0.3s ease;
}

.news-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.news-category {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
  font-weight: 600;
}

.news-category.traffic { background: #f56c6c; }
.news-category.crowd { background: #e6a23c; }
.news-category.environment { background: #67c23a; }
.news-category.event { background: #409eff; }

.news-title {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.9);
}

.news-views {
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
}

.sandbox-content {
  flex: 1;
  display: flex;
  overflow: hidden;
  position: relative;
}

.sandbox-main {
  flex: 1;
  position: relative;
}

.chart-container {
  width: 100%;
  height: 100%;
}

.chart-overlay {
  position: absolute;
  top: 20px;
  left: 20px;
  pointer-events: none;
  z-index: 5;
}

.overlay-title {
  font-size: 24px;
  font-weight: bold;
  background: linear-gradient(90deg, #00d9ff, #00ff88);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 5px;
}

.overlay-subtitle {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.5);
  letter-spacing: 2px;
}

.hot-search-panel {
  position: absolute;
  left: 20px;
  bottom: 20px;
  width: 280px;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid rgba(102, 126, 234, 0.3);
  z-index: 10;
  overflow: hidden;
}

.hot-search-header {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 15px;
  background: rgba(102, 126, 234, 0.2);
  border-bottom: 1px solid rgba(102, 126, 234, 0.3);
  font-weight: 600;
  font-size: 14px;
}

.hot-icon {
  font-size: 16px;
}

.update-time {
  margin-left: auto;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
  font-weight: normal;
}

.hot-search-list {
  padding: 10px;
  max-height: 300px;
  overflow-y: auto;
}

.hot-search-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.hot-search-item:hover {
  background: rgba(255, 255, 255, 0.1);
}

.hot-search-item.rank-1 .hot-rank { background: #ff4757; }
.hot-search-item.rank-2 .hot-rank { background: #ffa502; }
.hot-search-item.rank-3 .hot-rank { background: #ffd700; }

.hot-rank {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-size: 11px;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.2);
}

.hot-title {
  flex: 1;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.hot-heat {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.5);
}

.hot-trend {
  font-size: 10px;
  font-weight: bold;
}

.hot-trend.up { color: #ff4757; }
.hot-trend.down { color: #2ed573; }

.sandbox-panel {
  width: 300px;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  border-left: 1px solid rgba(102, 126, 234, 0.3);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  z-index: 10;
}

.panel-section {
  padding: 16px;
  border-bottom: 1px solid rgba(102, 126, 234, 0.2);
}

.panel-section h3 {
  margin: 0 0 12px 0;
  font-size: 14px;
  font-weight: 600;
  color: #00d9ff;
}

.city-list {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.city-item {
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 8px 10px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
}

.city-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(102, 126, 234, 0.3);
}

.city-item.rank-1 {
  background: linear-gradient(135deg, rgba(255, 71, 87, 0.15), rgba(255, 107, 129, 0.1));
  border-color: rgba(255, 71, 87, 0.3);
}

.city-item.rank-2 {
  background: linear-gradient(135deg, rgba(255, 165, 2, 0.15), rgba(255, 190, 118, 0.1));
  border-color: rgba(255, 165, 2, 0.3);
}

.city-item.rank-3 {
  background: linear-gradient(135deg, rgba(255, 215, 0, 0.15), rgba(255, 223, 0, 0.1));
  border-color: rgba(255, 215, 0, 0.3);
}

.city-rank {
  width: 22px;
  height: 22px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;
  flex-shrink: 0;
}

.city-item.rank-1 .city-rank {
  background: linear-gradient(135deg, #ff4757, #ff6b81);
}

.city-item.rank-2 .city-rank {
  background: linear-gradient(135deg, #ffa502, #ffbe76);
}

.city-item.rank-3 .city-rank {
  background: linear-gradient(135deg, #ffd700, #ffdf00);
}

.city-info {
  flex: 1;
  display: flex;
  justify-content: space-between;
  min-width: 0;
}

.city-name {
  font-weight: 500;
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.city-value {
  font-weight: bold;
  font-size: 13px;
  flex-shrink: 0;
}

.city-bar {
  width: 50px;
  height: 4px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 2px;
  overflow: hidden;
  flex-shrink: 0;
}

.city-bar-fill {
  height: 100%;
  border-radius: 2px;
  transition: width 0.5s ease;
}

.stats-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}

.stat-item {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  padding: 10px;
  text-align: center;
  border: 1px solid rgba(102, 126, 234, 0.2);
}

.stat-item.highlight {
  background: linear-gradient(135deg, rgba(255, 71, 87, 0.1), rgba(255, 107, 129, 0.05));
  border-color: rgba(255, 71, 87, 0.3);
}

.stat-label {
  display: block;
  font-size: 11px;
  opacity: 0.6;
  margin-bottom: 4px;
}

.stat-value {
  display: block;
  font-size: 18px;
  font-weight: bold;
}

.stat-city {
  display: block;
  font-size: 10px;
  opacity: 0.5;
  margin-top: 2px;
}

.legend {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
}

.legend-color {
  width: 24px;
  height: 12px;
  border-radius: 3px;
}

.legend-color.hot {
  background: linear-gradient(90deg, #c62828, #e53935);
}

.legend-color.medium-high {
  background: linear-gradient(90deg, #ef6c00, #f57c00);
}

.legend-color.medium {
  background: linear-gradient(90deg, #f9a825, #fbc02d);
}

.legend-color.low {
  background: linear-gradient(90deg, #00838f, #00acc1);
}

.view-controls {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
}

.view-btn {
  flex: 1;
  padding: 8px 12px;
  background: rgba(102, 126, 234, 0.2);
  border: 1px solid rgba(102, 126, 234, 0.4);
  border-radius: 6px;
  color: white;
  font-size: 11px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.view-btn:hover {
  background: rgba(102, 126, 234, 0.4);
  transform: translateY(-1px);
}

.height-explain {
  padding: 10px;
  background: rgba(0, 217, 255, 0.05);
  border-radius: 6px;
  border: 1px solid rgba(0, 217, 255, 0.2);
}

.height-explain p {
  margin: 4px 0;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.7);
}

.news-modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: #1a1a3e;
  border-radius: 12px;
  width: 90%;
  max-width: 500px;
  border: 1px solid rgba(102, 126, 234, 0.3);
  overflow: hidden;
}

.modal-header {
  padding: 20px;
  background: rgba(102, 126, 234, 0.2);
  border-bottom: 1px solid rgba(102, 126, 234, 0.3);
  display: flex;
  align-items: center;
  gap: 15px;
}

.modal-category {
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}

.modal-category.traffic { background: #f56c6c; }
.modal-category.crowd { background: #e6a23c; }
.modal-category.environment { background: #67c23a; }
.modal-category.event { background: #409eff; }

.modal-header h3 {
  flex: 1;
  margin: 0;
  font-size: 16px;
}

.modal-close {
  width: 30px;
  height: 30px;
  border: none;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  color: white;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-body {
  padding: 20px;
}

.modal-stats {
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
}

.modal-region {
  margin-bottom: 15px;
  font-size: 13px;
  color: #00d9ff;
}

.modal-desc {
  font-size: 14px;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
}
</style>
  