import { createRouter , createWebHistory } from "vue-router";
import Home from './Pages/indexWeb.vue'
import dashboard from './Pages/AdminPage.vue'
const routes = [
      { path: '/', component: Home },
      {path: '/dashboard' , component: dashboard}
  ]
 const router = createRouter({
       history : createWebHistory(), 
       routes
 })

 export default router