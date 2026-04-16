import { defineStore } from 'pinia'

interface User {
  username: string
  role: string
  token: string
}

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null,
    isLoggedIn: false
  }),
  
  actions: {
    login(userInfo: { username: string; role: string }) {
      this.user = {
        username: userInfo.username,
        role: userInfo.role,
        token: 'mock-token-' + Date.now()
      }
      this.isLoggedIn = true
      localStorage.setItem('user', JSON.stringify(this.user))
    },
    
    logout() {
      this.user = null
      this.isLoggedIn = false
      localStorage.removeItem('user')
    },
    
    checkLogin() {
      const storedUser = localStorage.getItem('user')
      if (storedUser) {
        this.user = JSON.parse(storedUser)
        this.isLoggedIn = true
      }
    }
  }
})