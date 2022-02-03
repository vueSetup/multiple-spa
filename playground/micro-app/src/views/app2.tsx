import { defineComponent } from 'vue'

import { MicroApp } from '@micro-zoe/micro-app'
import config from '@/config/apps.config'

export default defineComponent({
    setup() {
        const url = `${config.app2}/app2`
        return () => <micro-app name="app2" url={url} baseroute="/app2" shadowdom={true} />
    }
})
