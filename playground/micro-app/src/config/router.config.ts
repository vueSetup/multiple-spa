import { RouteRecordRaw, RouterView } from 'vue-router'

export const constantRouterMap: RouteRecordRaw[] = [{
    path: '/app1/:page*',
    name: 'app1',
    component: () =>
        import(/* webpackChunkName: "app1" */ '@/views/app1'),
    meta: { title: '加载中' }
}, {
    path: '/app2/:page*',
    name: 'app2',
    component: () =>
        import(/* webpackChunkName: "app2" */ '@/views/app2'),
    meta: { title: '加载中' }
}, {
    path: '/app3/:page*',
    name: 'app3',
    component: () =>
        import(/* webpackChunkName: "app3" */ '@/views/app3'),
    meta: { title: '加载中' }
}]