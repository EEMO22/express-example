import { createRouter, createWebHistory } from 'vue-router';
import Index from '../components/MovieIndexPage.vue';
import Show from '../components/MovieDetailPage.vue';

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/:id',
    name: 'show',
    component: Show,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
