import { createApp } from 'vue'
import start, { registerApps } from '@/micro'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

registerApps()

start()
