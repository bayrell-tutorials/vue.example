import "./main.scss";

import { createApp } from 'vue'
import { buildStore } from '@/lib';
import App from './App.vue'
import Router from './Router'
import { AppState } from './AppState'
import { initTestStore } from './StoreTest'

/* Create app state */
let Store = buildStore(AppState);

/* Create app */
var app = createApp(App)
	.use(Store)
	.use(Router)
	.mount('#app')

window["appInstance"] = app;
window["storeInstance"] = Store;

/* Create test store */
initTestStore(Store)