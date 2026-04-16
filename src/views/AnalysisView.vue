<template>
  <div class="analysis-container">
    <div class="page-header">
      <h2>数据分析</h2>
      <div class="header-info">
        <span>基于AI的热点智能分析</span>
      </div>
    </div>
    
    <div class="analysis-grid">
      <div class="analysis-card highlight-card">
        <h3>🏆 上周最爆热点</h3>
        <div class="hot-result">
          <div class="result-main">
            <div class="result-title">{{ lastWeekTop.title }}</div>
            <div class="result-heat">
              <span class="heat-value">{{ lastWeekTop.heat }}</span>
              <span class="heat-label">热度指数</span>
            </div>
          </div>
          <div class="result-detail">
            <div class="detail-item">
              <span class="label">发生区域</span>
              <span class="value">{{ lastWeekTop.region }}</span>
            </div>
            <div class="detail-item">
              <span class="label">事件类型</span>
              <span class="value type-tag" :class="lastWeekTop.type">{{ lastWeekTop.typeText }}</span>
            </div>
            <div class="detail-item">
              <span class="label">影响范围</span>
              <span class="value">{{ lastWeekTop.scope }}</span>
            </div>
            <div class="detail-item">
              <span class="label">处理状态</span>
              <span class="value status-tag" :class="lastWeekTop.status">{{ lastWeekTop.statusText }}</span>
            </div>
          </div>
          <div class="result-desc">{{ lastWeekTop.description }}</div>
        </div>
      </div>
      
      <div class="analysis-card highlight-card">
        <h3>📈 下周预测爆点</h3>
        <div class="prediction-result">
          <div class="prediction-item" v-for="(item, index) in nextWeekPredictions" :key="index">
            <div class="prediction-rank" :class="'rank-' + (index + 1)">{{ index + 1 }}</div>
            <div class="prediction-info">
              <div class="prediction-title">{{ item.title }}</div>
              <div class="prediction-meta">
                <span class="region">📍 {{ item.region }}</span>
                <span class="probability">概率: <strong :class="item.probability > 70 ? 'high' : ''">{{ item.probability }}%</strong></span>
              </div>
            </div>
            <div class="prediction-type" :class="item.type">{{ item.typeText }}</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="analysis-grid">
      <div class="analysis-card">
        <h3>热点分类分析</h3>
        <div class="category-filter">
          <button 
            v-for="cat in categories" 
            :key="cat.value" 
            class="filter-btn"
            :class="{ active: selectedCategory === cat.value }"
            @click="selectedCategory = cat.value"
          >
            {{ cat.label }}
          </button>
        </div>
        <div class="chart-with-result">
          <div id="category-pie" class="chart-half"></div>
          <div class="analysis-result">
            <h4>📊 分析结论</h4>
            <div class="result-list">
              <div class="result-item" v-for="(item, index) in categoryAnalysisResult" :key="index">
                <span class="result-dot" :style="{ background: item.color }"></span>
                <span class="result-text">{{ item.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="analysis-card">
        <h3>AI智能分析</h3>
        <div class="ai-analysis">
          <div class="ai-filter">
            <label>分析类型：</label>
            <select v-model="aiType" class="ai-select">
              <option value="all">全部类型</option>
              <option value="traffic">交通拥堵</option>
              <option value="crowd">人流密集</option>
              <option value="environment">环境问题</option>
              <option value="event">突发事件</option>
            </select>
            <label style="margin-left: 15px;">影响性质：</label>
            <select v-model="impactType" class="ai-select">
              <option value="all">全部</option>
              <option value="negative">负面影响</option>
              <option value="positive">正面影响</option>
            </select>
          </div>
          <div class="ai-results">
            <div class="ai-result-item" v-for="(item, index) in filteredAiResults" :key="index">
              <div class="ai-result-header">
                <span class="ai-type-tag" :class="item.type">{{ item.typeText }}</span>
                <span class="ai-impact" :class="item.impact">{{ item.impactText }}</span>
              </div>
              <div class="ai-result-content">{{ item.content }}</div>
              <div class="ai-result-meta">
                <span>置信度: {{ item.confidence }}%</span>
                <span>来源: {{ item.source }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="analysis-grid three-col">
      <div class="analysis-card small-card">
        <h3>时间趋势分析</h3>
        <div class="category-filter small">
          <button 
            v-for="cat in timeCategories" 
            :key="cat.value" 
            class="filter-btn small"
            :class="{ active: selectedTimeCategory === cat.value }"
            @click="selectedTimeCategory = cat.value"
          >
            {{ cat.label }}
          </button>
        </div>
        <div id="time-trend" class="chart-small"></div>
        <div class="time-analysis-result">
          <div class="time-result-item">
            <span class="time-label">高峰时段</span>
            <span class="time-value">{{ timeAnalysisResult.peak }}</span>
          </div>
          <div class="time-result-item">
            <span class="time-label">低谷时段</span>
            <span class="time-value">{{ timeAnalysisResult.low }}</span>
          </div>
          <div class="time-result-item">
            <span class="time-label">平均热点数</span>
            <span class="time-value">{{ timeAnalysisResult.average }}</span>
          </div>
        </div>
      </div>
      
      <div class="analysis-card small-card">
        <h3>区域热点对比</h3>
        <div id="region-bar" class="chart-small"></div>
        <div class="region-analysis-result">
          <div class="region-top3">
            <h4>🔥 热点TOP3城市</h4>
            <div class="region-item" v-for="(item, index) in regionTop3" :key="index">
              <span class="region-rank" :class="'rank-' + (index + 1)">{{ index + 1 }}</span>
              <span class="region-name">{{ item.name }}</span>
              <span class="region-count">{{ item.count }}个热点</span>
            </div>
          </div>
        </div>
      </div>
      
      <div class="analysis-card small-card">
        <h3>热点趋势预测</h3>
        <div id="trend-line" class="chart-small"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, nextTick, ref, computed, watch } from 'vue'
import * as echarts from 'echarts'

let charts: echarts.ECharts[] = []
let categoryChart: echarts.ECharts | null = null
let timeTrendChart: echarts.ECharts | null = null

const selectedCategory = ref('all')
const selectedTimeCategory = ref('all')
const aiType = ref('all')
const impactType = ref('all')

const categories = [
  { label: '全部', value: 'all' },
  { label: '交通', value: 'traffic' },
  { label: '人流', value: 'crowd' },
  { label: '环境', value: 'environment' },
  { label: '活动', value: 'event' }
]

const timeCategories = [
  { label: '全部', value: 'all' },
  { label: '工作日', value: 'weekday' },
  { label: '周末', value: 'weekend' },
  { label: '节假日', value: 'holiday' }
]

const lastWeekTop = ref({
  title: '北京朝阳区突发交通管制事件',
  heat: 9876,
  region: '北京市朝阳区',
  type: 'traffic',
  typeText: '交通拥堵',
  scope: '影响约50万人',
  status: 'resolved',
  statusText: '已解决',
  description: '因道路施工需要，朝阳区多条主干道实施临时交通管制，导致周边区域交通严重拥堵，持续时间约3小时，现已恢复正常通行。'
})

const nextWeekPredictions = ref([
  { title: '上海外滩跨年活动人流高峰', region: '上海', probability: 85, type: 'crowd', typeText: '人流密集' },
  { title: '广州天河商圈促销活动', region: '广州', probability: 78, type: 'event', typeText: '活动事件' },
  { title: '深圳科技园交通拥堵预警', region: '深圳', probability: 72, type: 'traffic', typeText: '交通拥堵' },
  { title: '杭州西湖景区游客高峰', region: '杭州', probability: 68, type: 'crowd', typeText: '人流密集' }
])

const categoryAnalysisResult = computed(() => {
  if (selectedCategory.value === 'all') {
    return [
      { text: '交通拥堵类热点占比最高(35%)，需重点关注', color: '#f56c6c' },
      { text: '商圈人流类热点占比25%，周末需加强监控', color: '#e6a23c' },
      { text: '突发事件占比20%，建议建立快速响应机制', color: '#409eff' },
      { text: '环境问题占比15%，需加强环保监测', color: '#67c23a' }
    ]
  } else if (selectedCategory.value === 'traffic') {
    return [
      { text: '交通拥堵严重程度：高等级占45%', color: '#f56c6c' },
      { text: '主要发生时段：早高峰(7-9点)和晚高峰(17-19点)', color: '#e6a23c' },
      { text: '建议：优化信号灯配时，增加公共交通运力', color: '#409eff' }
    ]
  } else if (selectedCategory.value === 'crowd') {
    return [
      { text: '人流密集严重程度：中等占50%', color: '#e6a23c' },
      { text: '主要发生区域：商圈、景区、地铁站', color: '#f56c6c' },
      { text: '建议：加强人流疏导，设置安全警示', color: '#67c23a' }
    ]
  } else {
    return [
      { text: '该类型热点整体呈下降趋势', color: '#67c23a' },
      { text: '需持续关注相关监测指标', color: '#409eff' }
    ]
  }
})

const timeAnalysisResult = computed(() => {
  if (selectedTimeCategory.value === 'weekend') {
    return { peak: '周六14:00-18:00', low: '周日22:00-次日6:00', average: '186个/天' }
  } else if (selectedTimeCategory.value === 'holiday') {
    return { peak: '节假日10:00-20:00', low: '凌晨0:00-6:00', average: '258个/天' }
  } else if (selectedTimeCategory.value === 'weekday') {
    return { peak: '工作日8:00-10:00', low: '凌晨0:00-5:00', average: '142个/天' }
  }
  return { peak: '周六14:00-18:00', low: '凌晨0:00-5:00', average: '156个/天' }
})

const regionTop3 = ref([
  { name: '北京', count: 198 },
  { name: '上海', count: 156 },
  { name: '广州', count: 132 }
])

const aiResults = ref([
  { type: 'traffic', typeText: '交通', impact: 'negative', impactText: '负面影响', content: '预计下周一早高峰期间，北京二环路将出现严重拥堵，建议市民提前规划出行路线。', confidence: 92, source: '历史数据分析' },
  { type: 'crowd', typeText: '人流', impact: 'negative', impactText: '负面影响', content: '周末期间上海迪士尼乐园人流将达到峰值，排队时间预计超过2小时。', confidence: 88, source: '客流预测模型' },
  { type: 'environment', typeText: '环境', impact: 'negative', impactText: '负面影响', content: '根据气象预报，本周三可能出现轻度雾霾，建议敏感人群减少户外活动。', confidence: 75, source: '环境监测系统' },
  { type: 'event', typeText: '活动', impact: 'positive', impactText: '正面影响', content: '深圳国际会展中心将举办大型科技展会，预计带动周边餐饮、住宿消费增长30%。', confidence: 85, source: '活动预测模型' },
  { type: 'traffic', typeText: '交通', impact: 'positive', impactText: '正面影响', content: '新开通的地铁线路将有效缓解广州天河区的交通压力，预计拥堵指数下降15%。', confidence: 90, source: '交通优化分析' },
  { type: 'crowd', typeText: '人流', impact: 'negative', impactText: '负面影响', content: '成都春熙路商圈周末人流密集，存在安全隐患，建议加强安保措施。', confidence: 82, source: '人流监测系统' }
])

const filteredAiResults = computed(() => {
  return aiResults.value.filter(item => {
    const typeMatch = aiType.value === 'all' || item.type === aiType.value
    const impactMatch = impactType.value === 'all' || item.impact === impactType.value
    return typeMatch && impactMatch
  })
})

const initCategoryPie = () => {
  categoryChart = echarts.init(document.getElementById('category-pie'))
  charts.push(categoryChart)
  updateCategoryChart()
}

const updateCategoryChart = () => {
  if (!categoryChart) return
  
  const data = selectedCategory.value === 'all' 
    ? [
        { value: 35, name: '交通拥堵', itemStyle: { color: '#f56c6c' } },
        { value: 25, name: '商圈人流', itemStyle: { color: '#e6a23c' } },
        { value: 20, name: '突发事件', itemStyle: { color: '#409eff' } },
        { value: 15, name: '环境问题', itemStyle: { color: '#67c23a' } },
        { value: 5, name: '其他', itemStyle: { color: '#909399' } }
      ]
    : [
        { value: 45, name: '严重', itemStyle: { color: '#f56c6c' } },
        { value: 30, name: '中等', itemStyle: { color: '#e6a23c' } },
        { value: 25, name: '轻微', itemStyle: { color: '#67c23a' } }
      ]
  
  const option = {
    tooltip: { trigger: 'item', formatter: '{b}: {c} ({d}%)' },
    legend: { orient: 'horizontal', bottom: 0 },
    series: [{
      type: 'pie',
      radius: ['35%', '60%'],
      center: ['50%', '45%'],
      avoidLabelOverlap: false,
      itemStyle: { borderRadius: 8, borderColor: '#fff', borderWidth: 2 },
      label: { show: false, emphasis: { show: true, fontSize: 12, fontWeight: 'bold' } },
      data: data
    }]
  }
  
  categoryChart.setOption(option)
}

watch(selectedCategory, () => {
  updateCategoryChart()
})

const initTimeTrend = () => {
  timeTrendChart = echarts.init(document.getElementById('time-trend'))
  charts.push(timeTrendChart)
  updateTimeTrendChart()
}

const updateTimeTrendChart = () => {
  if (!timeTrendChart) return
  
  const baseData = [120, 132, 101, 134, 90, 230, 210, 180]
  const urgentData = [20, 32, 11, 34, 20, 50, 40, 30]
  
  let multiplier = 1
  if (selectedTimeCategory.value === 'weekend') multiplier = 1.3
  if (selectedTimeCategory.value === 'holiday') multiplier = 1.8
  if (selectedTimeCategory.value === 'weekday') multiplier = 0.9
  
  const option = {
    tooltip: { trigger: 'axis' },
    legend: { data: ['热点数', '紧急热点'], bottom: 0 },
    grid: { left: '3%', right: '4%', bottom: '12%', containLabel: true },
    xAxis: { type: 'category', boundaryGap: false, data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日', '下周一'] },
    yAxis: { type: 'value' },
    series: [
      { 
        name: '热点数', 
        type: 'line', 
        data: baseData.map(v => Math.round(v * multiplier)), 
        smooth: true, 
        areaStyle: { color: 'rgba(64, 158, 255, 0.3)' }, 
        lineStyle: { color: '#409eff' }, 
        itemStyle: { color: '#409eff' } 
      },
      { 
        name: '紧急热点', 
        type: 'line', 
        data: urgentData.map(v => Math.round(v * multiplier)), 
        smooth: true, 
        areaStyle: { color: 'rgba(245, 108, 108, 0.3)' }, 
        lineStyle: { color: '#f56c6c' }, 
        itemStyle: { color: '#f56c6c' } 
      }
    ]
  }
  
  timeTrendChart.setOption(option)
}

watch(selectedTimeCategory, () => {
  updateTimeTrendChart()
})

const initRegionBar = () => {
  const chart = echarts.init(document.getElementById('region-bar'))
  charts.push(chart)
  
  const option = {
    tooltip: { trigger: 'axis' },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: { type: 'category', data: ['北京', '上海', '广州', '深圳', '成都', '重庆', '杭州', '武汉'] },
    yAxis: { type: 'value', name: '热点数' },
    series: [{
      type: 'bar',
      data: [198, 156, 132, 128, 98, 92, 89, 82],
      itemStyle: {
        color: (params: any) => {
          const colors = ['#f56c6c', '#e6a23c', '#67c23a', '#409eff', '#909399', '#f56c6c', '#e6a23c', '#67c23a']
          return colors[params.dataIndex % colors.length]
        },
        borderRadius: [5, 5, 0, 0]
      },
      label: { show: true, position: 'top' }
    }]
  }
  
  chart.setOption(option)
}

const initTrendLine = () => {
  const chart = echarts.init(document.getElementById('trend-line'))
  charts.push(chart)
  
  const option = {
    tooltip: { trigger: 'axis' },
    legend: { data: ['实际热点', '预测热点'], bottom: 0 },
    grid: { left: '3%', right: '4%', bottom: '12%', containLabel: true },
    xAxis: { type: 'category', boundaryGap: false, data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日', '下周一', '下周二', '下周三'] },
    yAxis: { type: 'value', name: '热点数' },
    series: [
      { name: '实际热点', type: 'line', data: [120, 132, 101, 134, 150, 143, 156, null, null, null], smooth: true, lineStyle: { color: '#409eff' }, itemStyle: { color: '#409eff' } },
      { name: '预测热点', type: 'line', data: [null, null, null, null, null, null, null, 165, 172, 185], smooth: true, lineStyle: { color: '#f56c6c', type: 'dashed' }, itemStyle: { color: '#f56c6c' } }
    ]
  }
  
  chart.setOption(option)
}

const handleResize = () => {
  charts.forEach(chart => chart.resize())
}

onMounted(() => {
  nextTick(() => {
    initCategoryPie()
    initTimeTrend()
    initRegionBar()
    initTrendLine()
  })
  
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  charts.forEach(chart => chart.dispose())
})
</script>

<style scoped>
.analysis-container {
  padding: 20px;
  height: 100%;
  overflow-y: auto;
  background: #f5f7fa;
}

.page-header {
  margin-bottom: 20px;
}

.page-header h2 {
  margin: 0 0 8px 0;
  font-size: 24px;
  color: #303133;
}

.header-info {
  color: #909399;
  font-size: 14px;
}

.analysis-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin-bottom: 20px;
}

.analysis-grid.three-col {
  grid-template-columns: repeat(3, 1fr);
}

.analysis-card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  padding: 20px;
}

.analysis-card.highlight-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.analysis-card.highlight-card h3 {
  color: white;
}

.analysis-card.small-card {
  padding: 15px;
}

.analysis-card h3 {
  margin: 0 0 15px 0;
  font-size: 16px;
  color: #303133;
  font-weight: 600;
  padding-bottom: 12px;
  border-bottom: 1px solid #ebeef5;
  position: relative;
}

.analysis-card h3::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 60px;
  height: 2px;
  background: linear-gradient(90deg, #409eff, #67c23a);
  border-radius: 1px;
}

.chart {
  width: 100%;
  height: 250px;
}

.chart-half {
  width: 100%;
  height: 200px;
}

.chart-small {
  width: 100%;
  height: 180px;
}

.chart-with-result {
  display: flex;
  gap: 20px;
}

.chart-with-result .chart-half {
  flex: 1;
}

.analysis-result {
  flex: 1;
  padding: 15px;
  background: #f5f7fa;
  border-radius: 8px;
}

.analysis-result h4 {
  margin: 0 0 12px 0;
  font-size: 14px;
  color: #303133;
}

.result-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.result-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 13px;
  color: #606266;
  line-height: 1.5;
}

.result-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-top: 5px;
  flex-shrink: 0;
}

.hot-result {
  padding: 10px 0;
}

.result-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.result-title {
  font-size: 20px;
  font-weight: bold;
}

.result-heat {
  text-align: right;
}

.heat-value {
  display: block;
  font-size: 32px;
  font-weight: bold;
  color: #ffd700;
}

.heat-label {
  font-size: 12px;
  opacity: 0.8;
}

.result-detail {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 15px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
}

.detail-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.detail-item .label {
  font-size: 12px;
  opacity: 0.7;
}

.detail-item .value {
  font-size: 14px;
  font-weight: 600;
}

.type-tag {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  display: inline-block;
}

.type-tag.traffic { background: #f56c6c; }
.type-tag.crowd { background: #e6a23c; }
.type-tag.environment { background: #67c23a; }
.type-tag.event { background: #409eff; }

.status-tag {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.status-tag.resolved { background: #67c23a; }
.status-tag.processing { background: #409eff; }
.status-tag.pending { background: #e6a23c; }

.result-desc {
  font-size: 14px;
  line-height: 1.6;
  opacity: 0.9;
}

.prediction-result {
  padding: 10px 0;
}

.prediction-item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  margin-bottom: 10px;
}

.prediction-rank {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.2);
}

.prediction-rank.rank-1 { background: #ffd700; color: #333; }
.prediction-rank.rank-2 { background: #c0c0c0; color: #333; }
.prediction-rank.rank-3 { background: #cd7f32; color: #333; }

.prediction-info {
  flex: 1;
}

.prediction-title {
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 4px;
}

.prediction-meta {
  display: flex;
  gap: 15px;
  font-size: 12px;
  opacity: 0.8;
}

.prediction-meta .probability strong {
  color: #ffd700;
}

.prediction-meta .probability strong.high {
  color: #ff6b6b;
}

.prediction-type {
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}

.prediction-type.traffic { background: #f56c6c; }
.prediction-type.crowd { background: #e6a23c; }
.prediction-type.environment { background: #67c23a; }
.prediction-type.event { background: #409eff; }

.category-filter {
  display: flex;
  gap: 8px;
  margin-bottom: 15px;
  flex-wrap: wrap;
}

.category-filter.small {
  gap: 6px;
  margin-bottom: 10px;
}

.filter-btn {
  padding: 6px 14px;
  border: 1px solid #dcdfe6;
  background: white;
  border-radius: 20px;
  font-size: 13px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn.small {
  padding: 4px 10px;
  font-size: 12px;
}

.filter-btn:hover {
  border-color: #409eff;
  color: #409eff;
}

.filter-btn.active {
  background: #409eff;
  border-color: #409eff;
  color: white;
}

.time-analysis-result {
  display: flex;
  gap: 20px;
  margin-top: 10px;
  padding: 10px;
  background: #f5f7fa;
  border-radius: 8px;
}

.time-result-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.time-label {
  font-size: 11px;
  color: #909399;
}

.time-value {
  font-size: 13px;
  font-weight: 600;
  color: #303133;
}

.region-analysis-result {
  margin-top: 10px;
}

.region-top3 h4 {
  margin: 0 0 10px 0;
  font-size: 13px;
  color: #303133;
}

.region-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 6px 10px;
  background: #f5f7fa;
  border-radius: 6px;
  margin-bottom: 6px;
}

.region-rank {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: bold;
  background: #dcdfe6;
  color: #606266;
}

.region-rank.rank-1 { background: #f56c6c; color: white; }
.region-rank.rank-2 { background: #e6a23c; color: white; }
.region-rank.rank-3 { background: #67c23a; color: white; }

.region-name {
  flex: 1;
  font-weight: 500;
  font-size: 13px;
  color: #303133;
}

.region-count {
  font-size: 12px;
  color: #909399;
}

.ai-analysis {
  height: 300px;
  display: flex;
  flex-direction: column;
}

.ai-filter {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  flex-wrap: wrap;
  gap: 10px;
}

.ai-filter label {
  font-size: 13px;
  color: #606266;
}

.ai-select {
  padding: 6px 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 13px;
  background: white;
}

.ai-results {
  flex: 1;
  overflow-y: auto;
}

.ai-result-item {
  padding: 12px;
  background: #f5f7fa;
  border-radius: 8px;
  margin-bottom: 10px;
}

.ai-result-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.ai-type-tag {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 600;
}

.ai-type-tag.traffic { background: #fef0f0; color: #f56c6c; }
.ai-type-tag.crowd { background: #fdf6ec; color: #e6a23c; }
.ai-type-tag.environment { background: #f0f9eb; color: #67c23a; }
.ai-type-tag.event { background: #ecf5ff; color: #409eff; }

.ai-impact {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.ai-impact.negative { background: #fef0f0; color: #f56c6c; }
.ai-impact.positive { background: #f0f9eb; color: #67c23a; }

.ai-result-content {
  font-size: 14px;
  color: #303133;
  line-height: 1.5;
  margin-bottom: 8px;
}

.ai-result-meta {
  display: flex;
  gap: 20px;
  font-size: 12px;
  color: #909399;
}
</style>
