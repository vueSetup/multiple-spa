import type { ConfigEnv, UserConfig } from 'vite';
import { loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { getThemeVariables } from 'ant-design-vue/dist/theme';
import { additionalData } from './build/themeConfig';
import { join } from 'path';
import reactRefresh from '@vitejs/plugin-react-refresh'
import qiankun from 'vite-plugin-qiankun'
import { name } from './package.json'

export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd();
  const env = loadEnv(mode, root);
  //TODO：通过mode判断
  const useDevMode = true
  return {
    base: env.VITE_BASE_URL,
    // 兼容 Cli
    define: {
      'process.env.BASE_URL': JSON.stringify(env.VITE_BASE_URL),
      'process.env.VUE_APP_API_BASE_URL': JSON.stringify(env.VITE_APP_API_BASE_URL),
    },
    plugins: [
      vue(),
      vueJsx(),
      ...(
        useDevMode ? [] : [
          reactRefresh()
        ]
      ),
      qiankun(`${name}`, { useDevMode })
    ],
    build: {
      cssCodeSplit: false,
      chunkSizeWarningLimit: 2048,
      rollupOptions: {
        output: {
          manualChunks: {
            vue: ['vue', 'vuex', 'vue-router'],
            antdv: ['ant-design-vue', '@ant-design/icons-vue'],
            moment: ['moment'],
          },
        },
      },
    },
    resolve: {
      alias: {
        moment$: 'moment/dist/moment.js',
        'moment/locale': 'moment/dist/locale',
        '~@': join(__dirname, './src'),
        '@': join(__dirname, './src'),
        vue: 'vue/dist/vue.esm-bundler.js',
      },
    },
    optimizeDeps: {
      include: [
        'ant-design-vue/es/locale/en_US',
        'ant-design-vue/es/locale/zh_CN',
        'store/plugins/expire',
        'ant-design-vue/es/_util/vue-types',
        'ant-design-vue/es/form',
        'moment',
        'moment/locale/eu',
        'moment/locale/zh-cn',
        '@ant-design/icons-vue',
        'lodash-es',
      ],
    },
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: { ...getThemeVariables() },
          // DO NOT REMOVE THIS LINE
          javascriptEnabled: true,
          additionalData,
        },
      },
    },
    server: {
      host: true,
      port: 6001,
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      proxy: {
        '/api': {
          // backend url
          target: 'https://store.antdv.com',
          ws: false,
          changeOrigin: true,
        },
      },
    },
  };
};
