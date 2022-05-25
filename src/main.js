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
//Navigation bar effects on scroll
window.addEventListener("scroll", function () {
    const header = document.querySelector("header")
    header.classList.toggle("sticky", this.window.scrollY > 0)
})

app.use(ElementUI)
app.use(router)
app.mount('#app')
