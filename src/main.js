import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 
import i18n from './i18n';
import './styles/global.css'; 

createApp(App).use(router).mount('#app'); // Use the router

App.use(i18n);