<template>
  <div class="app-container">
    <header class="app-header" v-if="!isLoginPage">
      <div class="header-left">
        <h1 class="logo">CityPulse</h1>
        <span class="subtitle">城市热点智能管理系统</span>
      </div>
      <nav class="nav-menu">
        <router-link to="/" class="nav-item" active-class="active">首页</router-link>
        <router-link to="/dashboard" class="nav-item" active-class="active">数据看板</router-link>
        <router-link to="/sandbox" class="nav-item" active-class="active">数字沙盘</router-link>
        <router-link to="/workorder" class="nav-item" active-class="active">工单管理</router-link>
        <router-link to="/analysis" class="nav-item" active-class="active">数据分析</router-link>
        <router-link to="/system" class="nav-item" active-class="active">系统管理</router-link>
      </nav>
      <div class="header-right">
        <div class="user-info">
          <span class="user-name">管理员</span>
          <div class="avatar">👤</div>
        </div>
      </div>
    </header>
    <main class="app-main" :class="{ 'no-header': isLoginPage }">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isLoginPage = computed(() => route.path === '/login')
</script>

<style scoped>
.app-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.app-header {
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  z-index: 100;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 15px;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.subtitle {
  font-size: 14px;
  opacity: 0.9;
}

.nav-menu {
  display: flex;
  gap: 30px;
}

.nav-item {
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding: 8px 12px;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-item:hover, .nav-item.active {
  background: rgba(255, 255, 255, 0.2);
}

.header-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.user-name {
  font-size: 14px;
  font-weight: 500;
}

.avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
}

.app-main {
  flex: 1;
  overflow: hidden;
  background-color: #f0f2f5;
}

.app-main.no-header {
  height: 100vh;
}
</style>
