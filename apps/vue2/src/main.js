import './public-path'
// with polyfills
import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/'
import i18n from './locales'
import { VueAxios } from './utils/request'
import ProLayout, { PageHeaderWrapper } from '@ant-design-vue/pro-layout'
import themePluginConfig from '../config/themePluginConfig'

// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'

import init from './core/bootstrap'
import './core/lazy_use' // use lazy load components
import './permission' // permission control
import './utils/filter' // global filter
import './global.less' // global style

Vue.config.productionTip = false

// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)
// use pro-layout components
Vue.component('pro-layout', ProLayout)
Vue.component('page-container', PageHeaderWrapper)
Vue.component('page-header-wrapper', PageHeaderWrapper)

window.umi_plugin_ant_themeVar = themePluginConfig.theme

// const app = new Vue({
//     router,
//     store,
//     i18n,
//     // init localstorage, vuex, Logo message
//     created: init,
//     render: (h) => h(App)
// }).$mount('#app')
// console.log('微应用app2渲染了')

// // 监听卸载操作
// window.addEventListener('unmount', function () {
//     app.$destroy()
//     console.log('微应用app2卸载了')
// })

let instance = null

function render (props = {}) {
    const { container } = props

    instance = new Vue({
        router,
        store,
        i18n,
        created: init,
        render: (h) => h(App)
    }).$mount(container ? container.querySelector('#app') : '#app')
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
    render()
}

if (window.__MICRO_APP_ENVIRONMENT__) {
    window.addEventListener('unmount', function () {
        instance.$destroy()
        console.log('微应用app2卸载了')
    })
}

export async function bootstrap () {
    console.log('[vue] vue app bootstraped')
}
export async function mount (props = {}) {
    console.log('[vue] props from main framework', props)
    render(props)
}
export async function unmount () {
    instance.$destroy()
    instance.$el.innerHTML = ''
    instance = null
    // router = null;
}
