import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue'; // Import HomePage component
import LoginPage from './views/LoginPage.vue'; // Import LoginPage component
import SignupPage from './views/SignupPage.vue'; // Import SignupPage component
import ParentDashboard from './views/ParentDashboard.vue'; 

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
    },
    {
      path: '/parent-dashboard', // Define a route for the parent dashboard
      name: 'ParentDashboard',
      component: ParentDashboard,
      meta: { requiresAuth: true, role: 'parent' } // Add metadata to restrict access to authenticated parent users
    }
  ]
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = /* Check if the user is authenticated */;
  const userRole = /* Get the role of the authenticated user */;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: 'Login' }); // Redirect to the login page if not authenticated
    } else if (to.meta.role && to.meta.role !== userRole) {
      next({ name: 'Home' }); // Redirect to the home page if the user does not have the required role
    } else {
      next(); // Continue to the requested route
    }
  } else {
    next(); // Continue to the requested route if no authentication is required
  }
});

export default router;
