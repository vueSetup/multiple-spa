const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  devServer: {
    // If you want to turn on the proxy, please remove the `before` in `devServer`
    proxy: {
      '/api': {
        // backend url
        target: 'https://store.antdv.com',
        ws: false,
        changeOrigin: true,
      },
      '/undefined': {
        // backend url
        target: 'https://store.antdv.com',
        ws: false,
        changeOrigin: true,
      },
    },
  },
  transpileDependencies: true,
});
