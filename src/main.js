import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import ElementUI from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'font-awesome/css/font-awesome.css'
import '@/css/style.css'
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementUI)
app.use(router)
app.mount('#app')
