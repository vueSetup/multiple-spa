/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/no-unresolved */
import './public-path';
import 'ant-design-vue/dist/antd.less';
import {
  Layout,
  Menu,
  Row,
  Col,
  Card,
  Form,
  Dropdown,
  Select,
  Button,
  Checkbox,
  Tabs,
  Tag,
  Input,
  DatePicker,
  TimePicker,
  Radio,
  Tooltip,
  Space,
  Steps,
  Divider,
  Descriptions,
  Alert,
  Result,
  Statistic,
  Popconfirm,
  Popover,
  Table,
  Avatar,
  List,
  Progress,
  Switch,
  Modal,
  Rate,
  ConfigProvider,
  Empty,
  Spin,
  Drawer,
  PageHeader,
  Carousel,
  BackTop,
  Upload,
  Badge,
} from 'ant-design-vue';
import { createApp, h } from 'vue';
// import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';
import router from './router';
import store from './store';
import locale from './locales';
import App from './App.vue';

import { ProProvider, PageContainer, TransformVnode } from '@/components';
import { useIcons } from '@/icons';
import Authority from './utils/authority/authority.vue';
import './app.less';
import './router/router-guards';

// qiankun
// eslint-disable-next-line import/first
import singleSpaVue from 'single-spa-vue';

// TODO :: https://github.com/single-spa/single-spa-vue/blob/main/src/single-spa-vue.js
const lifecycle = singleSpaVue({
  createApp,
  appOptions: {
    render: () => h(App),
    el: '#subapp-viewport',
  },
  handleInstance: app => {
    app
      .use(router)
      .use(locale)
      .use(store)
      .use(Layout)
      .use(Menu)
      .use(Row)
      .use(Col)
      .use(Card)
      .use(Form)
      .use(Dropdown)
      .use(Select)
      .use(Button)
      .use(Checkbox)
      .use(Tabs)
      .use(Tag)
      .use(Input)
      .use(DatePicker)
      .use(TimePicker)
      .use(Radio)
      .use(Tooltip)
      .use(Space)
      .use(Steps)
      .use(Divider)
      .use(Descriptions)
      .use(Alert)
      .use(Result)
      .use(Statistic)
      .use(Popconfirm)
      .use(Popover)
      .use(Table)
      .use(Avatar)
      .use(List)
      .use(Progress)
      .use(Switch)
      .use(Modal)
      .use(Rate)
      .use(ConfigProvider)
      .use(Empty)
      .use(Spin)
      .use(Drawer)
      .use(PageHeader)
      .use(ProProvider)
      .use(Badge)
      .use(Carousel)
      .use(BackTop)
      .use(Upload)
      .component(PageContainer.name, PageContainer)
      .component(TransformVnode.name, TransformVnode)
      .component(Authority.name, Authority);

    useIcons(app);
  },
});

export const bootstrap = lifecycle.bootstrap;
export const mount = lifecycle.mount;
export const unmount = lifecycle.unmount;

if (!window.__POWERED_BY_QIANKUN__) {
  const app = createApp(App);
  app
    .use(router)
    .use(locale)
    .use(store)
    .use(Layout)
    .use(Menu)
    .use(Row)
    .use(Col)
    .use(Card)
    .use(Form)
    .use(Dropdown)
    .use(Select)
    .use(Button)
    .use(Checkbox)
    .use(Tabs)
    .use(Tag)
    .use(Input)
    .use(DatePicker)
    .use(TimePicker)
    .use(Radio)
    .use(Tooltip)
    .use(Space)
    .use(Steps)
    .use(Divider)
    .use(Descriptions)
    .use(Alert)
    .use(Result)
    .use(Statistic)
    .use(Popconfirm)
    .use(Popover)
    .use(Table)
    .use(Avatar)
    .use(List)
    .use(Progress)
    .use(Switch)
    .use(Modal)
    .use(Rate)
    .use(ConfigProvider)
    .use(Empty)
    .use(Spin)
    .use(Drawer)
    .use(PageHeader)
    .use(ProProvider)
    .use(Badge)
    .use(Carousel)
    .use(BackTop)
    .use(Upload)
    .component(PageContainer.name, PageContainer)
    .component(TransformVnode.name, TransformVnode)
    .component(Authority.name, Authority);

  useIcons(app);
  // micro-app
  const container = document.querySelector('#vite-app');
  if (container) {
    app.mount(container);
  } else {
    app.mount('#app');
  }
  if (window.__MICRO_APP_ENVIRONMENT__) {
    window.addEventListener('unmount', function () {
      app.unmount();
    });
  }
}
// let instance = null;

// function render() {
//   instance = createApp(App)
//     .use(router)
//     .use(locale as any)
//     .use(store)
//     .use(Layout)
//     .use(Menu)
//     .use(Row)
//     .use(Col)
//     .use(Card)
//     .use(Form)
//     .use(Dropdown)
//     .use(Select)
//     .use(Button)
//     .use(Checkbox)
//     .use(Tabs)
//     .use(Tag)
//     .use(Input)
//     .use(DatePicker)
//     .use(TimePicker)
//     .use(Radio)
//     .use(Tooltip)
//     .use(Space)
//     .use(Steps)
//     .use(Divider)
//     .use(Descriptions)
//     .use(Alert)
//     .use(Result)
//     .use(Statistic)
//     .use(Popconfirm)
//     .use(Popover)
//     .use(Table)
//     .use(Avatar)
//     .use(List)
//     .use(Progress)
//     .use(Switch)
//     .use(Modal)
//     .use(Rate)
//     .use(ConfigProvider)
//     .use(Empty)
//     .use(Spin)
//     .use(Drawer)
//     .use(PageHeader)
//     .use(ProProvider)
//     .use(Badge)
//     .use(Carousel)
//     .use(BackTop)
//     .use(Upload)
//     .component(PageContainer.name, PageContainer)
//     .component(TransformVnode.name, TransformVnode)
//     .component(Authority.name, Authority);

//   useIcons(instance);

//   instance.mount('#vite-app');
//   console.log('instance', instance);
// }

// if (!(window.__POWERED_BY_QIANKUN__ || qiankunWindow.__POWERED_BY_QIANKUN__)) {
//   render();
// }

// export async function bootstrap() {
//   console.log('vue3 app bootstraped');
// }

// export async function mount(props = {}) {
//   console.log('vue3 app mount', props);
//   render();
// }

// export async function unmount() {
//   console.log('vue3 app unmount');
//   instance.$destroy?.();
//   instance.$el.innerHTML = '';
//   instance = null;
// }

// // if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
// //   render();
// // }

// if (qiankunWindow.__POWERED_BY_QIANKUN__ && import.meta.env.VITE_API) {
//   renderWithQiankun({
//     bootstrap() {
//       console.log('[vite] vite app bootstraped');
//     },

//     mount(props) {
//       console.log('[vite] vite app mount', props);
//       render();
//     },

//     unmount() {
//       console.log('unmount', instance);
//       instance.$destroy?.();
//       instance.$el.innerHTML = '';
//       instance = null;
//     },
//   });
// }
