import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Register from '@/views/Register.vue'
import Dashboard from '@/views/Dashboard.vue'
import Courses from '@/views/Courses.vue'
import CourseDetail from '@/views/CourseDetails.vue'
import Login from '@/views/Login.vue'


const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register},
    { path: '/dashboard', component: Dashboard},
    { path: '/courses', component: Courses},
    { path: '/courses/:id', component: CourseDetail},
    { path: '/login', component: Login}
  ];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;