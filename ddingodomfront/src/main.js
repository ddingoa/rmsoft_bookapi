/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import stores from './commonStore/store.js' // [store]

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)
app.config.globalProperties.$store = stores;

// [스토어 사용 설정]
app.use(stores);

registerPlugins(app)

app.mount('#app')
