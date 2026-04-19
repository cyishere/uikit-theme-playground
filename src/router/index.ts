import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/HomeView.vue';
import DemoPageView from '@/views/DemoPageView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/demo-page', component: DemoPageView }
  ]
});

export default router;
