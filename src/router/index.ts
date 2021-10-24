import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Solutions from '@/components/Solutions.vue';
import Pricing from '@/components/Pricing.vue';
import Docs from '@/components/docs/Docs.vue';
import Home from '@/components/home/Home.vue';
import News from '@/components/News.vue';

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
}, {
    path: '/solutions',
    name: 'Solutions',
    component: Solutions
}, {
    path: '/news',
    name: 'News',
    component: News
}];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior () {
        return { top: 0 };
    }
});

export default router;
