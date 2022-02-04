import { registerMicroApps, start } from 'qiankun'
import apps from './apps'

// 注册子应用函数
export const registerApps = () => registerMicroApps(apps);

// 导出 qiankun 的启动函数
export default start