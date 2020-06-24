import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './pages/Home.vue';
import Crud from './pages/Crud.vue';


export default function(params)
{
	params["router"] = new VueRouter({
		mode: 'history',
		base: '/',
		routes:
		[
			{
				path: '/',
				component: Home,
				props: { default: true, namespace: ["page", "Home"] }
			},
			{
				path: '/crud',
				component: Crud,
				props: { default: true, namespace: ["page", "Crud"] }
			},
		],
	});
	
	params["store"].registerModule(["page", "Home"], Home.buildStore());
	params["store"].registerModule(["page", "Crud"], Crud.buildStore());
	
	return params;
}
