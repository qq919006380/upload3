import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Upload3 from './components/index';
// 打印环境变量
let token = import.meta.env.VITE_TOKEN
console.log(token)
let app = createApp(App)
app.use(Upload3, {
    token: token
})
app.mount('#app');
