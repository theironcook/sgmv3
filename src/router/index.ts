import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Pricing from '@/components/Pricing.vue';
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
}, {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
}];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

export default router;
