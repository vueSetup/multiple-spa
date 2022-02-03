import { defineComponent } from 'vue'
import config from '@/config/apps.config'

export default defineComponent({
    setup() {
        const url = `${config.vite}/app1`
        return () => <micro-app name="app1" baseroute="/app1" url={url} />
    }
})
