import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import TopProject from '@/components/object/project/TopProject.vue';
import WorksDetailProject from '@/components/object/project/WorksDetailProject.vue';
import WorksProject from '@/components/object/project/WorksProject.vue';
import AboutProject from '@/components/object/project/AboutProject.vue';
import PriceProject from '@/components/object/project/PriceProject.vue';
import ServiceProject from '@/components/object/project/ServiceProject.vue';
import ContactProject from '@/components/object/project/ContactProject.vue';
import ThanksProject from '@/components/object/project/ThanksProject.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'top',
    component: TopProject,
  },
  {
    path: '/works',
    name: 'works',
    component: WorksProject,
  },
  {
    path: '/works/:id',
    name: 'worksdetail',
    component: WorksDetailProject,
    props: true,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutProject,
  },
  {
    path: '/price',
    name: 'price',
    component: PriceProject,
  },
  {
    path: '/service',
    name: 'service',
    component: ServiceProject,
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactProject,
  },
  {
    path: '/thanks',
    name: 'thanks',
    component: ThanksProject,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});

// routerをエクスポート
export default router;
