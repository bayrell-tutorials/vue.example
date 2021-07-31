import "./main.scss";

import { createApp } from 'vue'
import App from './App.vue'
import Router from './Router'
import Store, { initStore } from './Store'
import { createTestStore } from './StoreTest'

var app = createApp(App)
	.use(Store)
	.use(Router)
	.mount('#app')

window["appInstance"] = app;
window["storeInstance"] = Store;

/* Init store */
initStore(Store)

/* Create test store */
createTestStore(Store)