import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from './pages/Home/HomePage.vue'
import Home2Page from './pages/Home2/Home2Page.vue'
import CrudPage from './pages/Crud/CrudPage.vue'
import NotFoundPage from '@/pages/NotFound/NotFoundPage.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage,
		props: { store_path: ["HomePage"] }
	},
	{
		path: '/home2/',
		name: 'Home2Page',
		component: Home2Page,
		props: { store_path: ["Home2Page"] }
	},
	{
		path: '/crud/',
		name: 'CrudPage',
		component: CrudPage,
		props: { store_path: ["CrudPage"] }
	},
	{
		path: "/:pathMatch(.*)*",
		name: 'NotFoundPage',
		component: NotFoundPage,
		props: { store_path: ["NotFoundPage"] },
	}
]

const router = createRouter({
	history: createWebHistory("/"),
	routes
})

export default router
