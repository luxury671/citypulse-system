<template>
  <div class="home-container">
    <div class="hero-section">
      <div class="hero-content">
        <h1>CityPulse 城市热点智能管理系统</h1>
        <p>基于云边端协同架构，实现城市热点的智能监测、分析与处置</p>
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number">90%+</div>
            <div class="stat-label">多模态数据融合准确率</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">500ms</div>
            <div class="stat-label">热点识别延迟</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">2s</div>
            <div class="stat-label">3D沙盘加载耗时</div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="features-section">
      <div class="card">
        <h3>🌍 3D数字孪生</h3>
        <p>实时展示城市热点分布，支持时空回溯与多维度联动</p>
      </div>
      <div class="card">
        <h3>🤖 AI智能研判</h3>
        <p>融合文本、视频、舆情、政务数据，精准识别城市热点</p>
      </div>
      <div class="card">
        <h3>📱 多端协同</h3>
        <p>覆盖Web端、移动端、大屏端，实现全场景管理</p>
      </div>
      <div class="card">
        <h3>🔄 闭环处置</h3>
        <p>从热点识别到工单处置，形成完整的管理闭环</p>
      </div>
    </div>
    
    <div class="quick-actions">
      <h2>快速操作</h2>
      <div class="action-grid">
        <router-link to="/sandbox" class="action-card">
          <div class="action-icon">🗺️</div>
          <div class="action-title">数字沙盘</div>
          <div class="action-desc">查看2D/3D地图热点分布</div>
        </router-link>
        <router-link to="/dashboard" class="action-card">
          <div class="action-icon">📊</div>
          <div class="action-title">数据看板</div>
          <div class="action-desc">实时监控热点数据</div>
        </router-link>
        <router-link to="/workorder" class="action-card">
          <div class="action-icon">📋</div>
          <div class="action-title">工单管理</div>
          <div class="action-desc">处理热点处置工单</div>
        </router-link>
        <router-link to="/analysis" class="action-card">
          <div class="action-icon">📈</div>
          <div class="action-title">数据分析</div>
          <div class="action-desc">深度分析热点趋势</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.home-container {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 20px;
}

.hero-section {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 60px 40px;
  border-radius: 12px;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
}

.hero-content h1 {
  font-size: 48px;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-content p {
  font-size: 20px;
  margin-bottom: 40px;
  opacity: 0.9;
}

.hero-stats {
  display: flex;
  gap: 40px;
  margin-top: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 8px;
}

.stat-label {
  font-size: 14px;
  opacity: 0.8;
}

.features-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.features-section .card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.features-section .card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.features-section h3 {
  font-size: 20px;
  margin-bottom: 15px;
  color: #333;
}

.features-section p {
  color: #666;
  line-height: 1.6;
}

.quick-actions {
  margin-bottom: 30px;
}

.quick-actions h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
  text-align: center;
}

.action-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.action-card {
  background: white;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
  text-align: center;
}

.action-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.action-icon {
  font-size: 48px;
  margin-bottom: 15px;
}

.action-title {
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 10px;
}

.action-desc {
  color: #666;
  font-size: 14px;
}
</style>