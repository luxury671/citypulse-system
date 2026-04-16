<template>
  <div class="workorder-container">
    <div class="page-header">
      <h2>工单管理</h2>
      <div class="header-actions">
        <button class="btn btn-primary">新建工单</button>
        <button class="btn btn-success">批量导出</button>
      </div>
    </div>
    
    <div class="filter-section">
      <div class="filter-item">
        <label>状态：</label>
        <select class="filter-select">
          <option>全部</option>
          <option>待处理</option>
          <option>处理中</option>
          <option>已完成</option>
          <option>已关闭</option>
        </select>
      </div>
      <div class="filter-item">
        <label>等级：</label>
        <select class="filter-select">
          <option>全部</option>
          <option>紧急</option>
          <option>高</option>
          <option>中</option>
          <option>低</option>
        </select>
      </div>
      <div class="filter-item">
        <label>区域：</label>
        <select class="filter-select">
          <option>全部</option>
          <option>北京</option>
          <option>上海</option>
          <option>广州</option>
          <option>深圳</option>
        </select>
      </div>
      <div class="filter-item search-box">
        <input type="text" placeholder="搜索工单编号或描述" class="search-input">
        <button class="btn btn-primary">搜索</button>
      </div>
    </div>
    
    <div class="table-container">
      <table class="workorder-table">
        <thead>
          <tr>
            <th>工单编号</th>
            <th>热点标题</th>
            <th>等级</th>
            <th>区域</th>
            <th>创建时间</th>
            <th>状态</th>
            <th>负责人</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in workorders" :key="order.id">
            <td>{{ order.id }}</td>
            <td>{{ order.title }}</td>
            <td>
              <span :class="`level-tag level-${order.level}`">
                {{ order.levelText }}
              </span>
            </td>
            <td>{{ order.region }}</td>
            <td>{{ order.createTime }}</td>
            <td>
              <span :class="`status-tag status-${order.status}`">
                {{ order.statusText }}
              </span>
            </td>
            <td>{{ order.assignee }}</td>
            <td>
              <button class="btn btn-primary btn-sm">详情</button>
              <button class="btn btn-success btn-sm">处理</button>
              <button class="btn btn-danger btn-sm">关闭</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div class="pagination">
      <span>共 {{ total }} 条记录，第 {{ currentPage }}/{{ totalPages }} 页</span>
      <div class="page-buttons">
        <button class="btn btn-sm">上一页</button>
        <button class="btn btn-sm btn-primary">1</button>
        <button class="btn btn-sm">2</button>
        <button class="btn btn-sm">3</button>
        <button class="btn btn-sm">下一页</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// 模拟工单数据
const workorders = ref([
  {
    id: 'WO20240101001',
    title: '北京市朝阳区建国路拥堵',
    level: 3,
    levelText: '紧急',
    region: '北京',
    createTime: '2024-01-01 08:30',
    status: 1,
    statusText: '待处理',
    assignee: '张三'
  },
  {
    id: 'WO20240101002',
    title: '上海市南京路人流密集',
    level: 2,
    levelText: '高',
    region: '上海',
    createTime: '2024-01-01 09:15',
    status: 2,
    statusText: '处理中',
    assignee: '李四'
  },
  {
    id: 'WO20240101003',
    title: '广州市天河区暴雨积水',
    level: 3,
    levelText: '紧急',
    region: '广州',
    createTime: '2024-01-01 10:00',
    status: 3,
    statusText: '已完成',
    assignee: '王五'
  },
  {
    id: 'WO20240101004',
    title: '深圳市南山区科技展会',
    level: 1,
    levelText: '中',
    region: '深圳',
    createTime: '2024-01-01 11:30',
    status: 2,
    statusText: '处理中',
    assignee: '赵六'
  },
  {
    id: 'WO20240101005',
    title: '成都市锦里古街美食节',
    level: 2,
    levelText: '高',
    region: '成都',
    createTime: '2024-01-01 14:20',
    status: 3,
    statusText: '已完成',
    assignee: '孙七'
  }
])

const total = ref(125)
const currentPage = ref(1)
const totalPages = ref(13)
</script>

<style scoped>
.workorder-container {
  padding: 20px;
  height: 100%;
  overflow-y: auto;
}

.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.page-header h2 {
  margin: 0;
  font-size: 24px;
}

.header-actions {
  display: flex;
  gap: 10px;
}

.filter-section {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.filter-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.filter-item label {
  font-weight: 500;
  color: #333;
}

.filter-select {
  padding: 8px 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 14px;
  min-width: 120px;
}

.search-box {
  display: flex;
  gap: 10px;
  margin-left: auto;
}

.search-input {
  padding: 8px 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  width: 200px;
  font-size: 14px;
}

.table-container {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  overflow-x: auto;
  margin-bottom: 20px;
}

.workorder-table {
  width: 100%;
  border-collapse: collapse;
}

.workorder-table th,
.workorder-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #ebeef5;
}

.workorder-table th {
  background: #f5f7fa;
  font-weight: 600;
  color: #333;
  font-size: 14px;
}

.workorder-table td {
  color: #606266;
  font-size: 14px;
}

.level-tag {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.level-1 {
  background: #ecf5ff;
  color: #409eff;
}

.level-2 {
  background: #fdf6ec;
  color: #e6a23c;
}

.level-3 {
  background: #fef0f0;
  color: #f56c6c;
}

.status-tag {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.status-1 {
  background: #ecf5ff;
  color: #409eff;
}

.status-2 {
  background: #f0f9eb;
  color: #67c23a;
}

.status-3 {
  background: #f5f7fa;
  color: #909399;
}

.btn-sm {
  padding: 4px 8px;
  font-size: 12px;
  margin-right: 5px;
}

.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: white;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.pagination span {
  color: #606266;
  font-size: 14px;
}

.page-buttons {
  display: flex;
  gap: 5px;
}
</style>