import { createRouter, createWebHistory } from 'vue-router';
import routes from '~pages';

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    const body = document.querySelector('body');
    body.scrollTop = 0;
  },
});

export default router;
