import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router';
import Layout from './pages/Layout.vue'
import store from './store.js'
import router from './router.js'

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(store);

var params = {
	render: h => h(Layout),
};
params = store(params);
params = router(params);

var app = new Vue(params).$mount('#app');

window["appInstance"] = app;
window["storeInstance"] = params["store"];