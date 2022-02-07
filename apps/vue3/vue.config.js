/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
// const webpack = require('webpack');
const { IgnorePlugin } = require('webpack');
const { createMockMiddleware } = require('umi-mock-middleware');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
// const StyleLintPlugin = require('stylelint-webpack-plugin');
const { getThemeVariables } = require('ant-design-vue/dist/theme');
const { additionalData } = require('./themeConfig');

// const isProd = process.env.NODE_ENV === 'production'
// const isUseCDN = process.env.IS_USE_CDN === 'true';
const isAnalyz = process.env.IS_ANALYZ === 'true';

function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  publicPath: process.env.BASE_URL,
  configureWebpack: {
    plugins: [
      // Ignore all locale files of moment.js
      new IgnorePlugin({
        resourceRegExp: /^\.\/locale$/,
        contextRegExp: /moment$/,
      }),
      // stylelint
      // @see https://vue-loader.vuejs.org/zh/guide/linting.html#stylelint
      // new StyleLintPlugin({
      //   files: ['**/*.{vue,htm,html,css,sss,less,scss,sass}'],
      // })
    ],
  },
  chainWebpack: config => {
    // 移除 prefetch preload 插件
    config.plugins.delete('prefetch-app');
    config.plugins.delete('preload-app');

    config.resolve.alias.set('@', resolve('./src'));
    config.resolve.alias.set('vue$', resolve('./node_modules/vue/dist/vue.esm-bundler.js'));
    config.module.rule('markdown').test(/\.md$/).use('raw-loader').loader('raw-loader').end();
    // if `IS_ANALYZ` env is TRUE on report bundle info
    isAnalyz &&
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
        {
          analyzerMode: 'static',
        },
      ]);
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: { ...getThemeVariables() },
          // DO NOT REMOVE THIS LINE
          javascriptEnabled: true,
        },
        // 如果你不需要多主题，可以注释 additionalData
        additionalData,
      },
    },
  },
  devServer: {
    port: 6003,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    // mock serve
    onBeforeSetupMiddleware: ({ app }) => {
      if (process.env.MOCK !== 'none' && process.env.HTTP_MOCK !== 'none') {
        app.use(createMockMiddleware());
      }
    },
    // If you want to turn on the proxy, please remove the `before` in `devServer`
    proxy: {
      '/api': {
        // backend url
        target: 'https://store.antdv.com',
        ws: false,
        changeOrigin: true,
      },
    },
  },
  /* ADVANCED SETTINGS */

  // disable source map in production
  productionSourceMap: false,
  // ESLint Check: DISABLE for false
  // Type: boolean | 'warning' | 'default' | 'error'
  lintOnSave: false,
  // babel-loader no-ignore node_modules/*
  transpileDependencies: true,
};
