import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout';

Vue.use(Router);

// 免登录可访问页面
export const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/Login/index'),
        hidden: true,
        meta: {
            roles: ['noLogin'],
        },
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import('@/views/Dashboard'),
                meta: { title: '概览', icon: 'preview' },
            },
        ],
    },
    {
        path: '/404',
        component: () => import('@/views/404'),
        hidden: true,
    },
];
const createRouter = () =>
    new Router({
        scrollBehavior: () => ({ y: 0 }),
        routes: constantRoutes,
    });

const router = createRouter();

export function resetRouter() {
    const newRouter = createRouter();
    router.matcher = newRouter.matcher;
}

export default router;
