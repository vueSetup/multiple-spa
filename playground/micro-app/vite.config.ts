import { defineConfig, ConfigEnv, UserConfig, loadEnv, searchForWorkspaceRoot } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

// https://vitejs.dev/config/
export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)

  return {
    base: env.VITE_BASE_URL,
    define: {
      'process.env.BASE_URL': JSON.stringify(env.VITE_BASE_URL)
    },
    plugins: [
      vue({
        template: {
          compilerOptions: {
            isCustomElement: tag => /^micro-app/.test(tag)
          }
        }
      }),
      vueJsx()
    ],
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
      }
    },
    server: {
      fs: {
        allow: [
          searchForWorkspaceRoot(root)
        ]
      }, 
      proxy: {
        '/api': {
          // backend url
          target: 'https://store.antdv.com',
          ws: false,
          changeOrigin: true,
        },
      },
    }
  }
}
