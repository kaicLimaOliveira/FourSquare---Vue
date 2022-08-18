import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { isAuthStore } from '../store/authStore'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login.vue'),
        meta: {
            requiresAuth: false,
            title: 'Login',
        },
    },
    {
        path: '/',
        name: 'Base',
        component: () => import('../views/Base.vue'),
        meta: {
            requiresAuth: true,
        },
        children: [
            {
                path: '/',
                name: 'Home',
                component: () => import('../views/Home.vue'),
                meta: {
                    requiresAuth: true,
                    title: 'Home'
                },
                // children: [
                //     // {
                //     //     path: 'eventos',
                //     //     name: 'Events',
                //     //     component: () => import('../components/views/Events.vue')
                //     // }
                // ]
            },
            {
                path: '/culto-ao-vivo',
                name: 'LiveWorship',
                component: () => import('../views/LiveWorship.vue'),
                meta: {
                    requiresAuth: true,
                    title: 'Culto ao vivo'
                },
            },
            {
                path: '/comunidade',
                name: 'Community',
                component: () => import('../views/Community.vue'),
                meta: {
                    requiresAuth: true,
                    title: 'Comunidade'
                },
            },
            {
                path: '/classes',
                name: 'ClassLearning',
                component: () => import('../views/Classes.vue'),
                meta: {
                    requiresAuth: true,
                    title: 'Classes'
                },
            },
            {
                path: '/ofertas',
                name: 'Offers',
                component: () => import('../views/Offer.vue'),
                meta: {
                    requiresAuth: true,
                    title: 'Ofertas'
                },
            },
            {
                path: '/configuracoes',
                name: 'Settings',
                // redirect: { name: 'Conta' },
                component: () => import('../views/Settings.vue'),
                meta: {
                    requiresAuth: true,
                    title: 'Configurações'
                },
                //     children: [
                //         {
                //             path: '/configuracoes/conta',
                //             name: 'Conta',
                //             component: () => import('@/components/views/Account.vue')
                //         },
                //         {
                //             path: '/configuracoes/notificacoes',
                //             name: 'Notificações',
                //             component: () => import('@/components/views/Notifications.vue')
                //         },
                //         {
                //             path: '/configuracoes/redes-sociais',
                //             name: 'Redes Sociais',
                //             component: () => import('@/components/views/SocialMedia.vue'),
                //             children: [
                //                 // {
                //                 //   path: '/configuracoes/redes-sociais/minhas-redes-sociais',
                //                 //   name: 'Minhas Redes Sociais',
                //                 //   component: () => import('@/components/views/MySocialMedia.vue')
                //                 // },
                //                 {
                //                     path: '/configuracoes/redes-sociais/igreja',
                //                     name: 'Redes Sociais da Igreja',
                //                     component: () => import('@/components/views/CultSocialMedia.vue')
                //                 },
                //                 {
                //                     path: '/configuracoes/redes-sociais/grupo-de-louvor',
                //                     name: 'Redes Sociais do Grupo de Louvor',
                //                     component: () => import('@/components/views/WorshipGroupSocialMedia.vue')
                //                 },
                //             ]
                //         },
                //     ]
            },
        ]
    },
    // { path: '/:catchAll(.*)*', name: 'NotFound', component: () => import('../components/views/NotFound.vue') }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

router.beforeEach(async (to, from) => {
    const useAuthStore = isAuthStore()
    document.title = String(to.meta.title)

    if (to.meta.requiresAuth) {
        const authResponse = await useAuthStore.requiresAuth()

        if (!authResponse)
            router.push({ name: 'Login' })
    }
})

export default router;

