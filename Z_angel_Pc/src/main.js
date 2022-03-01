import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './assets/css/reset.css'
import './assets/css/golbal.less'
import 'element-plus/dist/index.css'
import Message from './uilts/message'

const app = createApp(App).use(router)

app.config.globalProperties.$message = Message

app.mount('#app')
