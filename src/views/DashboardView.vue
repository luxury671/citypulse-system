<template>
  <div class="dashboard-container">
    <div class="dashboard-header">
      <h2>数据看板</h2>
      <div class="date-range">
        <span>2024-01-01 至 2024-01-31</span>
        <button class="btn btn-primary">切换时间</button>
      </div>
    </div>
    
    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-icon hotspots">📊</div>
        <div class="stat-content">
          <div class="stat-value">{{ totalHotspots }}</div>
          <div class="stat-label">总热点数</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon emergency">🚨</div>
        <div class="stat-content">
          <div class="stat-value">{{ emergencyHotspots }}</div>
          <div class="stat-label">紧急热点</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon handled">✅</div>
        <div class="stat-content">
          <div class="stat-value">{{ handledHotspots }}</div>
          <div class="stat-label">已处置</div>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon efficiency">⚡</div>
        <div class="stat-content">
          <div class="stat-value">{{ avgResponseTime }}min</div>
          <div class="stat-label">平均响应时间</div>
        </div>
      </div>
    </div>
    
    <div class="charts-grid">
      <div class="chart-card">
        <h3>热点趋势分析</h3>
        <div id="trend-chart" class="chart"></div>
      </div>
      <div class="chart-card">
        <h3>热点类型分布</h3>
        <div id="type-chart" class="chart"></div>
      </div>
    </div>
    
    <div class="charts-grid">
      <div class="chart-card">
        <h3>区域热点分布</h3>
        <div id="region-chart" class="chart"></div>
      </div>
      <div class="chart-card">
        <h3>处置效率分析</h3>
        <div id="efficiency-chart" class="chart"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

// 模拟数据
const totalHotspots = ref(1256)
const emergencyHotspots = ref(234)
const handledHotspots = ref(1022)
const avgResponseTime = ref(15)

// 初始化图表
onMounted(() => {
  initTrendChart()
  initTypeChart()
  initRegionChart()
  initEfficiencyChart()
})

// 热点趋势图表
const initTrendChart = () => {
  const chart = echarts.init(document.getElementById('trend-chart'))
  
  const option = {
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1日', '5日', '10日', '15日', '20日', '25日', '31日']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '热点数',
        type: 'line',
        stack: 'Total',
        data: [120, 132, 101, 134, 90, 230, 210],
        smooth: true,
        itemStyle: {
          color: '#409eff'
        }
      }
    ]
  }
  
  chart.setOption(option)
}

// 热点类型分布
const initTypeChart = () => {
  const chart = echarts.init(document.getElementById('type-chart'))
  
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: '热点类型',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 335, name: '交通拥堵' },
          { value: 310, name: '商圈人流' },
          { value: 234, name: '突发事件' },
          { value: 135, name: '环境问题' },
          { value: 1548, name: '其他' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  
  chart.setOption(option)
}

// 区域热点分布
const initRegionChart = () => {
  const chart = echarts.init(document.getElementById('region-chart'))
  
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value'
    },
    yAxis: {
      type: 'category',
      data: ['北京', '上海', '广州', '深圳', '成都', '杭州', '武汉']
    },
    series: [
      {
        name: '热点数',
        type: 'bar',
        data: [18203, 23489, 29034, 104970, 131744, 63023, 98765],
        itemStyle: {
          color: function(params: any) {
            const colorList = ['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452']
            return colorList[params.dataIndex]
          }
        }
      }
    ]
  }
  
  chart.setOption(option)
}

// 处置效率分析
const initEfficiencyChart = () => {
  const chart = echarts.init(document.getElementById('efficiency-chart'))
  
  const option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    legend: {
      data: ['响应时间', '处置时间']
    },
    xAxis: [
      {
        type: 'category',
        data: ['1日', '5日', '10日', '15日', '20日', '25日', '31日'],
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '时间(min)',
        axisLabel: {
          formatter: '{value} min'
        }
      }
    ],
    series: [
      {
        name: '响应时间',
        type: 'bar',
        data: [12, 15, 18, 14, 16, 19, 17],
        itemStyle: {
          color: '#5470c6'
        }
      },
      {
        name: '处置时间',
        type: 'bar',
        data: [25, 28, 32, 26, 29, 31, 27],
        itemStyle: {
          color: '#91cc75'
        }
      }
    ]
  }
  
  chart.setOption(option)
}
</script>

<style scoped>
.dashboard-container {
  padding: 20px;
  height: 100%;
  overflow-y: auto;
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.dashboard-header h2 {
  margin: 0;
  font-size: 24px;
}

.date-range {
  display: flex;
  align-items: center;
  gap: 10px;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.stat-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: white;
}

.stat-icon.hotspots {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.stat-icon.emergency {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.stat-icon.handled {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
}

.stat-icon.efficiency {
  background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
}

.stat-content {
  flex: 1;
}

.stat-value {
  font-size: 28px;
  font-weight: bold;
  color: #333;
}

.stat-label {
  font-size: 14px;
  color: #666;
  margin-top: 4px;
}

.charts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 20px;
  margin-bottom: 20px;
}

.chart-card {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  padding: 20px;
}

.chart-card h3 {
  margin: 0 0 15px 0;
  font-size: 16px;
  color: #333;
}

.chart {
  width: 100%;
  height: 300px;
}
</style>