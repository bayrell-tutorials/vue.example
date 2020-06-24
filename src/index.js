import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import Layout from './pages/Layout.vue'
import Router from './router.js'
import Store from './store.js'

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Store);

var params = {
	render: h => h(Layout),
};
params = Store(params);
params = Router(params);
params = Store.init(params);

var app = new Vue(params).$mount('#app');

window["appInstance"] = app;
window["storeInstance"] = params["store"];
