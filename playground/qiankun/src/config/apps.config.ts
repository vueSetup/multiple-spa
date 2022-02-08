import { registerMicroApps, start } from "qiankun"
import type { RegistrableApp, ObjectType } from 'qiankun'

export const apps: RegistrableApp<ObjectType>[] = [
    {
        name: 'app1',
        entry: '//localhost:6001/app1/',
        container: '#subapp-viewport',
        activeRule: '/app1'
    },
    {
        name: 'app2',
        entry: '//localhost:6002/app2/',
        container: '#subapp-viewport',
        activeRule: '/app2'
    },
    {
        name: 'app3',
        entry: '//localhost:6003/app3/',
        container: '#subapp-viewport',
        activeRule: '/app3'
    }
]

export const bootstrap = () => {
    registerMicroApps(apps)
    start()
}