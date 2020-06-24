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
				component: Home
			},
			{
				path: '/crud',
				component: Crud,
				name: 'crud',
			},
		],
	});
	
	params["store"].registerModule(["page", "home"], Home.buildStore());
	params["store"].registerModule(["page", "crud"], Crud.buildStore());
	
	return params;
}
