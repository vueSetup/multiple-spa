import { defineComponent } from 'vue'
import config from '@/config/apps.config'

export default defineComponent({
    setup() {
        const url = `${config.app1}/app1`
        return () => <micro-app name="app1" url={url} baseroute="/app1"/>
    }
})
