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
import './global.less'

Vue.config.productionTip = false

// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)
// use pro-layout components
Vue.component('pro-layout', ProLayout)
Vue.component('page-container', PageHeaderWrapper)
Vue.component('page-header-wrapper', PageHeaderWrapper)

window.umi_plugin_ant_themeVar = themePluginConfig.theme

// qiankun
// eslint-disable-next-line import/first
import singleSpaVue from 'single-spa-vue'

// TODO :: https://github.com/single-spa/single-spa-vue/blob/main/src/single-spa-vue.js
const lifecycle = singleSpaVue({
  Vue,
  appOptions: {
    router,
    store,
    i18n,
    created: init,
    render: h => h(App),
    el: '#subapp-viewport'
  }
})

export const bootstrap = lifecycle.bootstrap
export const mount = lifecycle.mount
export const unmount = lifecycle.unmount

if (!window.__POWERED_BY_QIANKUN__) {
  const app = new Vue({
    router,
    store,
    i18n,
    // init localstorage, vuex, Logo message
    created: init,
    render: h => h(App)
  }).$mount('#app')

  // micro-app
  if (window.__MICRO_APP_ENVIRONMENT__) {
    window.addEventListener('unmount', function () {
      app.$destroy()
    })
  }
}
