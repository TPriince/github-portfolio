import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'
import RepositoryView from '../views/RepositoryView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import RepoLinkView from '../views/RepoLinkView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/repository/:name',
        name: 'repository',
        component: RepositoryView,
        children: [                 // nested routes
            {
                path: 'link',
                component: RepoLinkView,
            }
        ]
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'notFound',
        component: NotFoundView
    },
  ]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router