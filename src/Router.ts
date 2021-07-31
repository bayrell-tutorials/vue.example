import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomePage from './pages/Home/HomePage.vue'
import CrudPage from './pages/Crud/CrudPage.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'HomePage',
		component: HomePage,
		props: { store_path: ["HomePage"] }
	},
	{
		path: '/crud/',
		name: 'CrudPage',
		component: CrudPage,
		props: { store_path: ["CrudPage"] }
	},
]

const router = createRouter({
	history: createWebHistory("/"),
	routes
})

export default router
