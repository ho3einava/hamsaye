import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap-icons/font/bootstrap-icons.css'





import './assets/css/main.css'
import Router from '../router.js'
const app = createApp(App)
app.use(Router)

app.mount('#app')
