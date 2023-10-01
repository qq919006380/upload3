import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Upload3 from './components/index';
// 打印环境变量
console.log()





let app = createApp(App)
app.use(Upload3,{
    token:import.meta.env.VITE_TOKEN
})
app.mount('#app');
