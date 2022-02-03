import microApp from '@micro-zoe/micro-app'
microApp.start({
    plugins: {
        modules: {
            'app1': [{
                loader(code) {
                    if (process.env.NODE_ENV === 'development') {
                        // 这里 /basename/ 需要和子应用vite.config.js中base的配置保持一致
                        code = code.replace(/(from|import)(\s*['"])(\/child\/vite\/)/g, all => {
                            return all.replace('/app1/', 'http://localhost:6001/app1/')
                        })
                    }
                    return code
                }
            }]
        }
    }
})

import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

createApp(App)
    .use(router)
    .mount('#app')
