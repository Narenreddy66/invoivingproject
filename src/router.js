import { createRouter,createWebHistory } from "vue-router";
import FirstPage from "./pages/FirstPage.vue";

const routes=[
  {
    path:'/',
    name:'FirstPage',
    component:FirstPage
   
  },
 
 
]
const router =createRouter({
  history:createWebHistory(),
  routes
});
export default router;