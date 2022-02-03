import { defineComponent } from 'vue'

import { MicroApp } from '@micro-zoe/micro-app'
import config from '@/config/apps.config'

export default defineComponent({
    setup() {
        const url = `${config.app3}/app3`
        return () => <micro-app name="app3" url={url} baseroute="/app3" shadowdom={true} />
    }
})
