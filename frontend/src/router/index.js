import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Register from '@/views/Register.vue'
import Dashboard from '@/views/Dashboard.vue'
import Courses from '@/views/Courses.vue'
import Login from '@/views/Login.vue'
import Game1 from '@/game1/Game1.vue'
import Game2 from '@/game2/Game2.vue'
import Profile from '@/views/Profile.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register},
    { path: '/dashboard', component: Dashboard},
    { path: '/courses', component: Courses},
    { path: '/login', component: Login},
    { path: '/dashboard/:account', name: 'dashboard', component: Dashboard },
    { path: '/profile', component: Profile},
    { path: '/game1', component: Game1},
    { path: '/game2', component: Game2}
  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  router.beforeEach((to, from, next) => {
    const publicPages = ['/login', '/register', '/', '/courses'];
    const authRequired = !publicPages.includes(to.path);
    
    const token = localStorage.getItem('token');
    
    if (authRequired && !token) {
      return next('/login');
    }
  
    next();
  });
export default router;