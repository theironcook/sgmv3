import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { defineAsyncComponent } from 'vue';

import Solutions from '@/components/Solutions.vue';
import Pricing from '@/components/Pricing.vue';
import Docs from '@/components/docs/Docs.vue';
import Home from '@/components/Home.vue';
import News from '@/components/News.vue';

const routes: Array<RouteRecordRaw> = [{
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'SaaSGlue' }
}, {
    path: '/docs',
    name: 'Docs',
    component: Docs,
    meta: { title: 'Docs | SaaSGlue' }
}, {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing,
    meta: { title: 'Pricing | SaaSGlue' }
}, {
    path: '/solutions',
    name: 'Solutions',
    component: Solutions,
    meta: { title: 'Solutions | SaaSGlue' }
}, {
    path: '/news',
    name: 'News',
    component: News,
    meta: { title: 'News | SaaSGlue' }
},
{
    path: '/livedemo',
    name: 'LiveDemo',
    component: defineAsyncComponent(() => import('@/components/LiveDemo.vue')),
    meta: { title: 'Demo | SaaSGlue' }
}];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior () {
        return { top: 0 };
    }
});

router.beforeEach((to, from, next) => { 
    const _hsq = (<any>window)._hsq = (<any>window)._hsq || [];
    _hsq.push(['setPath', to.path]);
    _hsq.push(['trackPageView']);
  
    next();
}); 

router.afterEach(to => {
    if (to.meta.title) {
        document.title = to.meta.title as string;
    }
});

export default router;
