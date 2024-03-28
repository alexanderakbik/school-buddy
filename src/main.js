import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n'; // Import i18n configuration
import './styles/global.css';

const app = createApp(App);
app.use(router); // Use the router
app.use(i18n); // Use Vue I18n
app.mount('#app'); // Mount the app
