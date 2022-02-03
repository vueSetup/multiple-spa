
// 开发环境地址
const config: Record<string, string> = {
  app1: 'http://localhost:6001',
  app2: 'http://localhost:6002',
  app3: 'http://localhost:6003',
}

// 线上环境地址
if (process.env.NODE_ENV === 'production') {
  // 基座应用和子应用部署在同一个域名下，这里使用location.origin进行补全
  Object.keys(config).forEach((key) => {
    config[key] = window.location.origin
  })
}

// if (true) {
//   Object.keys(config).forEach((key) => {
//     config[key] = `http://127.0.0.1:8080`
//   })

//   const { protocol, hostname } = location
//   config.nextjs11 = `${protocol}//${hostname}:5006`
//   config.nuxtjs2 = `${protocol}//${hostname}:6006`
// }

export default config
