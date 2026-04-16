<template>
  <div class="system-container">
    <div class="page-header">
      <h2>系统管理</h2>
      <div class="header-info">
        <span>系统配置与维护</span>
      </div>
    </div>
    
    <div class="system-tabs">
      <div class="tab-buttons">
        <button 
          class="tab-btn" 
          :class="{ active: activeTab === 'workorders' }" 
          @click="activeTab = 'workorders'"
        >
          工单处理
        </button>
        <button 
          class="tab-btn" 
          :class="{ active: activeTab === 'users' }" 
          @click="activeTab = 'users'"
        >
          用户管理
        </button>
        <button 
          class="tab-btn" 
          :class="{ active: activeTab === 'roles' }" 
          @click="activeTab = 'roles'"
        >
          角色权限
        </button>
        <button 
          class="tab-btn" 
          :class="{ active: activeTab === 'settings' }" 
          @click="activeTab = 'settings'"
        >
          系统设置
        </button>
        <button 
          class="tab-btn" 
          :class="{ active: activeTab === 'logs' }" 
          @click="activeTab = 'logs'"
        >
          操作日志
        </button>
      </div>
      
      <div class="tab-content">
        <!-- 工单处理 -->
        <div v-show="activeTab === 'workorders'" class="tab-pane">
          <div class="pane-header">
            <h3>工单处理状态</h3>
            <div class="workorder-stats">
              <div class="stat-badge pending">
                <span class="count">{{ pendingCount }}</span>
                <span class="label">待处理</span>
              </div>
              <div class="stat-badge processing">
                <span class="count">{{ processingCount }}</span>
                <span class="label">处理中</span>
              </div>
              <div class="stat-badge completed">
                <span class="count">{{ completedCount }}</span>
                <span class="label">已完成</span>
              </div>
            </div>
          </div>
          
          <div class="workorder-filter">
            <select v-model="statusFilter" class="filter-select">
              <option value="all">全部状态</option>
              <option value="pending">待处理</option>
              <option value="processing">处理中</option>
              <option value="completed">已完成</option>
              <option value="closed">已关闭</option>
            </select>
            <select v-model="typeFilter" class="filter-select">
              <option value="all">全部类型</option>
              <option value="traffic">交通问题</option>
              <option value="crowd">人流问题</option>
              <option value="environment">环境问题</option>
              <option value="event">活动事件</option>
            </select>
            <input type="text" v-model="searchKeyword" placeholder="搜索工单..." class="filter-input">
          </div>
          
          <div class="table-container">
            <table class="system-table">
              <thead>
                <tr>
                  <th>工单编号</th>
                  <th>标题</th>
                  <th>类型</th>
                  <th>优先级</th>
                  <th>状态</th>
                  <th>创建时间</th>
                  <th>处理人</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="order in filteredWorkorders" :key="order.id">
                  <td>{{ order.id }}</td>
                  <td>{{ order.title }}</td>
                  <td>
                    <span class="type-tag" :class="order.type">{{ order.typeText }}</span>
                  </td>
                  <td>
                    <span class="priority-tag" :class="order.priority">{{ order.priorityText }}</span>
                  </td>
                  <td>
                    <span class="status-tag" :class="order.status">{{ order.statusText }}</span>
                  </td>
                  <td>{{ order.createTime }}</td>
                  <td>{{ order.handler || '-' }}</td>
                  <td>
                    <button class="btn btn-sm btn-primary" @click="viewWorkorder(order)">查看</button>
                    <button class="btn btn-sm btn-success" v-if="order.status === 'pending'" @click="processWorkorder(order)">处理</button>
                    <button class="btn btn-sm btn-warning" v-if="order.status === 'processing'" @click="completeWorkorder(order)">完成</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <!-- 用户管理 -->
        <div v-show="activeTab === 'users'" class="tab-pane">
          <div class="pane-header">
            <h3>用户管理</h3>
            <button class="btn btn-primary">新增用户</button>
          </div>
          
          <div class="table-container">
            <table class="system-table">
              <thead>
                <tr>
                  <th>用户ID</th>
                  <th>用户名</th>
                  <th>角色</th>
                  <th>状态</th>
                  <th>创建时间</th>
                  <th>最后登录</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="user in users" :key="user.id">
                  <td>{{ user.id }}</td>
                  <td>{{ user.username }}</td>
                  <td>{{ user.role }}</td>
                  <td>
                    <span :class="`status-tag ${user.status === 'active' ? 'active' : 'inactive'}`">
                      {{ user.status === 'active' ? '活跃' : '禁用' }}
                    </span>
                  </td>
                  <td>{{ user.createTime }}</td>
                  <td>{{ user.lastLogin }}</td>
                  <td>
                    <button class="btn btn-sm btn-primary">编辑</button>
                    <button class="btn btn-sm btn-danger">删除</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        
        <!-- 角色权限 -->
        <div v-show="activeTab === 'roles'" class="tab-pane">
          <div class="pane-header">
            <h3>角色权限管理</h3>
            <button class="btn btn-primary">新增角色</button>
          </div>
          
          <div class="roles-list">
            <div class="role-card" v-for="role in roles" :key="role.id">
              <div class="role-header">
                <h4>{{ role.name }}</h4>
                <span class="role-desc">{{ role.description }}</span>
              </div>
              <div class="role-permissions">
                <div class="permission-item" v-for="perm in role.permissions" :key="perm">
                  {{ perm }}
                </div>
              </div>
              <div class="role-actions">
                <button class="btn btn-sm btn-primary">编辑</button>
                <button class="btn btn-sm btn-danger">删除</button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- 系统设置 -->
        <div v-show="activeTab === 'settings'" class="tab-pane">
          <div class="settings-form">
            <div class="form-section">
              <h3>基本设置</h3>
              <div class="form-item">
                <label>系统名称：</label>
                <input type="text" class="form-input" value="CityPulse城市热点智能管理系统">
              </div>
              <div class="form-item">
                <label>系统版本：</label>
                <input type="text" class="form-input" value="v1.0.0" readonly>
              </div>
              <div class="form-item">
                <label>AI模型API：</label>
                <input type="text" class="form-input" placeholder="https://api.chatglm.com/v4">
              </div>
            </div>
            
            <div class="form-section">
              <h3>地图设置</h3>
              <div class="form-item">
                <label>默认地图类型：</label>
                <select class="form-select">
                  <option>2D地图</option>
                  <option>3D沙盘</option>
                </select>
              </div>
              <div class="form-item">
                <label>地图API Key：</label>
                <input type="text" class="form-input" placeholder="请输入地图API Key">
              </div>
            </div>
            
            <div class="form-actions">
              <button class="btn btn-primary">保存设置</button>
              <button class="btn btn-default">重置</button>
            </div>
          </div>
        </div>
        
        <!-- 操作日志 -->
        <div v-show="activeTab === 'logs'" class="tab-pane">
          <div class="pane-header">
            <h3>操作日志</h3>
            <div class="log-search">
              <input type="text" placeholder="搜索日志" class="form-input">
              <button class="btn btn-primary">搜索</button>
            </div>
          </div>
          
          <div class="logs-container">
            <div class="log-item" v-for="log in logs" :key="log.id">
              <div class="log-header">
                <span class="log-user">{{ log.user }}</span>
                <span class="log-time">{{ log.time }}</span>
                <span :class="`log-type ${log.type}`">{{ log.typeText }}</span>
              </div>
              <div class="log-content">{{ log.content }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeTab = ref('workorders')
const statusFilter = ref('all')
const typeFilter = ref('all')
const searchKeyword = ref('')

const workorders = ref([
  { id: 'WO20240101001', title: '北京朝阳区交通拥堵问题', type: 'traffic', typeText: '交通问题', priority: 'high', priorityText: '高', status: 'pending', statusText: '待处理', createTime: '2024-01-31 08:30:00', handler: null },
  { id: 'WO20240101002', title: '上海浦东商圈人流预警', type: 'crowd', typeText: '人流问题', priority: 'medium', priorityText: '中', status: 'processing', statusText: '处理中', createTime: '2024-01-31 09:15:00', handler: '张三' },
  { id: 'WO20240101003', title: '广州天河区环境污染投诉', type: 'environment', typeText: '环境问题', priority: 'high', priorityText: '高', status: 'processing', statusText: '处理中', createTime: '2024-01-31 10:00:00', handler: '李四' },
  { id: 'WO20240101004', title: '深圳南山区活动安保需求', type: 'event', typeText: '活动事件', priority: 'low', priorityText: '低', status: 'completed', statusText: '已完成', createTime: '2024-01-30 14:30:00', handler: '王五' },
  { id: 'WO20240101005', title: '成都春熙路人流管控', type: 'crowd', typeText: '人流问题', priority: 'high', priorityText: '高', status: 'completed', statusText: '已完成', createTime: '2024-01-30 16:00:00', handler: '赵六' },
  { id: 'WO20240101006', title: '杭州西湖景区游客疏导', type: 'crowd', typeText: '人流问题', priority: 'medium', priorityText: '中', status: 'closed', statusText: '已关闭', createTime: '2024-01-29 11:00:00', handler: '钱七' },
  { id: 'WO20240101007', title: '武汉江汉路交通管制', type: 'traffic', typeText: '交通问题', priority: 'high', priorityText: '高', status: 'pending', statusText: '待处理', createTime: '2024-01-31 11:30:00', handler: null },
  { id: 'WO20240101008', title: '南京新街口活动审批', type: 'event', typeText: '活动事件', priority: 'medium', priorityText: '中', status: 'processing', statusText: '处理中', createTime: '2024-01-31 12:00:00', handler: '孙八' }
])

const pendingCount = computed(() => workorders.value.filter(w => w.status === 'pending').length)
const processingCount = computed(() => workorders.value.filter(w => w.status === 'processing').length)
const completedCount = computed(() => workorders.value.filter(w => w.status === 'completed').length)

const filteredWorkorders = computed(() => {
  return workorders.value.filter(order => {
    const statusMatch = statusFilter.value === 'all' || order.status === statusFilter.value
    const typeMatch = typeFilter.value === 'all' || order.type === typeFilter.value
    const searchMatch = searchKeyword.value === '' || 
      order.title.includes(searchKeyword.value) || 
      order.id.includes(searchKeyword.value)
    return statusMatch && typeMatch && searchMatch
  })
})

const viewWorkorder = (order: any) => {
  alert(`查看工单: ${order.title}`)
}

const processWorkorder = (order: any) => {
  order.status = 'processing'
  order.statusText = '处理中'
  order.handler = '当前用户'
}

const completeWorkorder = (order: any) => {
  order.status = 'completed'
  order.statusText = '已完成'
}

const users = ref([
  { id: '1', username: 'admin', role: '超级管理员', status: 'active', createTime: '2024-01-01 00:00:00', lastLogin: '2024-01-31 14:30:00' },
  { id: '2', username: 'user1', role: '管理员', status: 'active', createTime: '2024-01-02 10:00:00', lastLogin: '2024-01-30 09:15:00' },
  { id: '3', username: 'user2', role: '操作员', status: 'inactive', createTime: '2024-01-03 15:20:00', lastLogin: '2024-01-25 16:45:00' }
])

const roles = ref([
  { id: '1', name: '超级管理员', description: '拥有系统全部权限', permissions: ['用户管理', '角色管理', '系统设置', '日志管理', '工单管理', '数据分析'] },
  { id: '2', name: '管理员', description: '拥有部分管理权限', permissions: ['工单管理', '数据分析', '用户管理'] },
  { id: '3', name: '操作员', description: '仅能处理工单', permissions: ['工单管理'] }
])

const logs = ref([
  { id: '1', user: 'admin', time: '2024-01-31 14:30:00', type: 'login', typeText: '登录', content: '管理员admin登录系统' },
  { id: '2', user: 'user1', time: '2024-01-31 10:15:00', type: 'operation', typeText: '操作', content: '处理了工单WO20240101001' },
  { id: '3', user: 'admin', time: '2024-01-30 16:45:00', type: 'setting', typeText: '设置', content: '修改了系统设置' }
])
</script>

<style scoped>
.system-container {
  padding: 20px;
  height: 100%;
  overflow-y: auto;
}

.page-header {
  margin-bottom: 20px;
}

.page-header h2 {
  margin: 0 0 8px 0;
  font-size: 24px;
}

.header-info {
  color: #666;
  font-size: 14px;
}

.system-tabs {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
  overflow: hidden;
}

.tab-buttons {
  display: flex;
  background: #f5f7fa;
  border-bottom: 1px solid #ebeef5;
}

.tab-btn {
  padding: 15px 25px;
  border: none;
  background: transparent;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 2px solid transparent;
}

.tab-btn:hover {
  color: #409eff;
}

.tab-btn.active {
  color: #409eff;
  background: white;
  border-bottom-color: #409eff;
}

.tab-content {
  padding: 20px;
}

.tab-pane {
  min-height: 500px;
}

.pane-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.pane-header h3 {
  margin: 0;
  font-size: 18px;
}

.workorder-stats {
  display: flex;
  gap: 15px;
}

.stat-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
  border-radius: 8px;
}

.stat-badge .count {
  font-size: 24px;
  font-weight: bold;
}

.stat-badge .label {
  font-size: 12px;
  opacity: 0.8;
}

.stat-badge.pending { background: #fef0f0; color: #f56c6c; }
.stat-badge.processing { background: #fdf6ec; color: #e6a23c; }
.stat-badge.completed { background: #f0f9eb; color: #67c23a; }

.workorder-filter {
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
}

.filter-select {
  padding: 8px 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 14px;
  min-width: 120px;
}

.filter-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 14px;
}

.table-container {
  overflow-x: auto;
}

.system-table {
  width: 100%;
  border-collapse: collapse;
}

.system-table th,
.system-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #ebeef5;
}

.system-table th {
  background: #f5f7fa;
  font-weight: 600;
  color: #333;
}

.type-tag {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.type-tag.traffic { background: #fef0f0; color: #f56c6c; }
.type-tag.crowd { background: #fdf6ec; color: #e6a23c; }
.type-tag.environment { background: #f0f9eb; color: #67c23a; }
.type-tag.event { background: #ecf5ff; color: #409eff; }

.priority-tag {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
}

.priority-tag.high { background: #fef0f0; color: #f56c6c; }
.priority-tag.medium { background: #fdf6ec; color: #e6a23c; }
.priority-tag.low { background: #f0f9eb; color: #67c23a; }

.status-tag {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.status-tag.pending { background: #fef0f0; color: #f56c6c; }
.status-tag.processing { background: #fdf6ec; color: #e6a23c; }
.status-tag.completed { background: #f0f9eb; color: #67c23a; }
.status-tag.closed { background: #f4f4f5; color: #909399; }
.status-tag.active { background: #f0f9eb; color: #67c23a; }
.status-tag.inactive { background: #fef0f0; color: #f56c6c; }

.roles-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.role-card {
  background: #f5f7fa;
  padding: 20px;
  border-radius: 8px;
}

.role-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
}

.role-header h4 {
  margin: 0;
  font-size: 16px;
}

.role-desc {
  font-size: 12px;
  color: #666;
}

.role-permissions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 15px;
}

.permission-item {
  background: white;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  border: 1px solid #dcdfe6;
}

.role-actions {
  display: flex;
  gap: 10px;
  justify-content: flex-end;
}

.settings-form {
  max-width: 800px;
}

.form-section {
  margin-bottom: 25px;
  padding: 20px;
  background: #f5f7fa;
  border-radius: 6px;
}

.form-section h3 {
  margin: 0 0 15px 0;
  font-size: 16px;
}

.form-item {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  gap: 15px;
}

.form-item label {
  width: 120px;
  font-weight: 500;
  color: #333;
}

.form-input,
.form-select {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  font-size: 14px;
}

.form-actions {
  display: flex;
  gap: 10px;
  margin-top: 30px;
}

.log-search {
  display: flex;
  gap: 10px;
  width: 300px;
}

.logs-container {
  max-height: 500px;
  overflow-y: auto;
}

.log-item {
  padding: 15px;
  border-bottom: 1px solid #ebeef5;
}

.log-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 8px;
}

.log-user {
  font-weight: 600;
  color: #333;
}

.log-time {
  color: #909399;
  font-size: 12px;
}

.log-type {
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 500;
}

.log-type.login {
  background: #ecf5ff;
  color: #409eff;
}

.log-type.operation {
  background: #f0f9eb;
  color: #67c23a;
}

.log-type.setting {
  background: #fdf6ec;
  color: #e6a23c;
}

.log-content {
  color: #606266;
  font-size: 14px;
  line-height: 1.5;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary {
  background: #409eff;
  color: white;
}

.btn-primary:hover {
  background: #66b1ff;
}

.btn-success {
  background: #67c23a;
  color: white;
}

.btn-success:hover {
  background: #85ce61;
}

.btn-warning {
  background: #e6a23c;
  color: white;
}

.btn-warning:hover {
  background: #ebb563;
}

.btn-danger {
  background: #f56c6c;
  color: white;
}

.btn-danger:hover {
  background: #f78989;
}

.btn-default {
  background: white;
  color: #606266;
  border: 1px solid #dcdfe6;
}

.btn-default:hover {
  background: #f5f7fa;
}

.btn-sm {
  padding: 4px 10px;
  font-size: 12px;
  margin-right: 5px;
}
</style>
