import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue'; // Import HomePage component
import LoginPage from './views/LoginPage.vue'; // Import LoginPage component
import SignupPage from './views/SignupPage.vue'; // Import SignupPage component

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage
    },
    {
      path: '/login',
      name: 'Login',
      component: LoginPage
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignupPage
    }
  ]
});

export default router;
