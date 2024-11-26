import { createApp } from 'vue';
// import './style.css';
import '../src/Styles/styles.scss';
import App from './App.vue';
import router from './router';
import "vue3-toastify/dist/index.css";
const app=createApp(App);
app.use(router);
app.mount("#app");

