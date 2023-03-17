import { createRouter,createWebHistory} from 'vue-router'



const  routes = [
    
    {
        path: '/',
        alias:'/login',
        name: 'login',
        component: () => import('@/components/LoginForm.vue')
    },
    {
        path: '/home',
        alias:'/home',
        name: 'home',
        component: () => import('@/components/HomeView.vue')
    }
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

export default router;