<template>
  <div class="login-page">
    <div class="login-background">
      <div class="bg-gradient"></div>
      <div class="bg-particles"></div>
    </div>
    
    <div class="login-container">
      <div class="login-box" v-if="!showRegister">
        <div class="login-header">
          <div class="logo-icon">🌍</div>
          <h1>CityPulse</h1>
          <p>城市热点智能管理系统</p>
        </div>
        
        <form @submit.prevent="handleLogin" class="login-form">
          <div class="form-group">
            <div class="input-icon">👤</div>
            <input 
              type="text" 
              v-model="loginForm.username" 
              placeholder="请输入用户名" 
              required
            >
          </div>
          
          <div class="form-group">
            <div class="input-icon">🔒</div>
            <input 
              type="password" 
              v-model="loginForm.password" 
              placeholder="请输入密码" 
              required
            >
          </div>
          
          <div class="form-options">
            <label class="remember-me">
              <input type="checkbox" v-model="loginForm.remember">
              <span>记住我</span>
            </label>
            <a href="#" class="forgot-password">忘记密码？</a>
          </div>
          
          <button type="submit" class="btn-login">
            <span>登 录</span>
            <div class="btn-icon">→</div>
          </button>
          
          <div class="form-footer">
            <span>还没有账号？</span>
            <a href="#" @click.prevent="showRegister = true">立即注册</a>
          </div>
        </form>
        
        <div class="test-account">
          <span>测试账号：admin / 123456</span>
        </div>
      </div>
      
      <div class="register-box" v-else>
        <div class="register-header">
          <div class="back-btn" @click="showRegister = false">←</div>
          <h2>创建账号</h2>
        </div>
        
        <form @submit.prevent="handleRegister" class="register-form">
          <div class="form-group">
            <div class="input-icon">👤</div>
            <input 
              type="text" 
              v-model="registerForm.username" 
              placeholder="请输入用户名" 
              required
            >
          </div>
          
          <div class="form-group">
            <div class="input-icon">🔒</div>
            <input 
              type="password" 
              v-model="registerForm.password" 
              placeholder="请输入密码" 
              required
            >
          </div>
          
          <div class="form-group">
            <div class="input-icon">🔐</div>
            <input 
              type="password" 
              v-model="registerForm.confirmPassword" 
              placeholder="请再次输入密码" 
              required
            >
          </div>
          
          <div class="form-group">
            <div class="input-icon">🎭</div>
            <select v-model="registerForm.role" required>
              <option value="operator">操作员</option>
              <option value="admin">管理员</option>
              <option value="viewer">查看员</option>
            </select>
          </div>
          
          <button type="submit" class="btn-login">
            <span>注 册</span>
            <div class="btn-icon">✓</div>
          </button>
          
          <div class="form-footer">
            <span>已有账号？</span>
            <a href="#" @click.prevent="showRegister = false">立即登录</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'

const router = useRouter()
const userStore = useUserStore()
const showRegister = ref(false)

const loginForm = ref({
  username: '',
  password: '',
  remember: false
})

const registerForm = ref({
  username: '',
  password: '',
  confirmPassword: '',
  role: 'operator'
})

const handleLogin = async () => {
  if (loginForm.value.username === 'admin' && loginForm.value.password === '123456') {
    userStore.login({
      username: loginForm.value.username,
      role: 'admin'
    })
    router.push('/sandbox')
  } else {
    alert('用户名或密码错误')
  }
}

const handleRegister = () => {
  if (registerForm.value.password !== registerForm.value.confirmPassword) {
    alert('两次输入的密码不一致')
    return
  }
  alert('注册成功，请登录')
  showRegister.value = false
}
</script>

<style scoped>
.login-page {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  overflow: hidden;
}

.login-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.bg-gradient {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%);
}

.bg-particles {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 20% 80%, rgba(102, 126, 234, 0.3) 0%, transparent 50%),
    radial-gradient(circle at 80% 20%, rgba(118, 75, 162, 0.3) 0%, transparent 50%);
}

.login-container {
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 420px;
  padding: 20px;
}

.login-box,
.register-box {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  padding: 50px 40px;
  box-shadow: 
    0 25px 50px rgba(0, 0, 0, 0.3),
    0 0 100px rgba(102, 126, 234, 0.2);
  backdrop-filter: blur(10px);
}

.login-header {
  text-align: center;
  margin-bottom: 40px;
}

.logo-icon {
  font-size: 64px;
  margin-bottom: 15px;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.login-header h1 {
  font-size: 36px;
  font-weight: 800;
  color: #1a1a2e;
  margin: 0 0 8px 0;
  letter-spacing: 2px;
}

.login-header p {
  font-size: 14px;
  color: #666;
  margin: 0;
}

.register-header {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
}

.back-btn {
  width: 40px;
  height: 40px;
  background: #f5f7fa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-btn:hover {
  background: #e6e8eb;
  transform: translateX(-5px);
}

.register-header h2 {
  margin: 0;
  font-size: 24px;
  color: #1a1a2e;
}

.form-group {
  margin-bottom: 20px;
  position: relative;
}

.form-group input,
.form-group select {
  width: 100%;
  padding: 16px 20px 16px 50px;
  border: 2px solid #e6e8eb;
  border-radius: 12px;
  font-size: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;
  background: #fafbfc;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #667eea;
  background: white;
  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.1);
}

.form-group select {
  cursor: pointer;
  padding-left: 50px;
}

.input-icon {
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  font-size: 18px;
  z-index: 1;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  font-size: 14px;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  color: #666;
}

.remember-me input[type="checkbox"] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #667eea;
}

.forgot-password {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
}

.forgot-password:hover {
  text-decoration: underline;
}

.btn-login {
  width: 100%;
  padding: 18px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.btn-login:hover {
  transform: translateY(-3px);
  box-shadow: 0 12px 30px rgba(102, 126, 234, 0.4);
}

.btn-login:active {
  transform: translateY(-1px);
}

.btn-icon {
  font-size: 20px;
}

.form-footer {
  text-align: center;
  font-size: 14px;
  color: #666;
}

.form-footer a {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  margin-left: 5px;
}

.form-footer a:hover {
  text-decoration: underline;
}

.test-account {
  text-align: center;
  margin-top: 25px;
  padding: 15px;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1));
  border-radius: 10px;
  font-size: 13px;
  color: #667eea;
  font-weight: 500;
}
</style>
