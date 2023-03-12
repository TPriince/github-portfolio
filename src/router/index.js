import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'
import RepositoryView from '../views/RepositoryView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/repository',
        component: RepositoryView
    },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router