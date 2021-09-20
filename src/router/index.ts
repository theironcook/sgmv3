import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Docs from '@/components/docs/Docs.vue';
import Home from '@/components/home/Home.vue';

const routes: Array<RouteRecordRaw> = [{
    path: '/',
    name: 'Home',
    component: Home
}, {
    path: '/docs',
    name: 'Docs',
    component: Docs
}];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
