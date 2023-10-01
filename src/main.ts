import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Upload3 from './components/index';

let app = createApp(App)
app.use(Upload3,{
    token:"<YOUR_TOKEN>"
})
app.mount('#app');
