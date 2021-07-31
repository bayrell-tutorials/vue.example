import { createStore, Store } from 'vuex'
import { HomePageStore } from './pages/Home/HomePageStore'
import { CrudPageStore } from './pages/Crud/CrudPageStore'


/**
 * Create store
 */
export default createStore({
	state: {
	},
	mutations: {
	},
	actions: {
	},
	modules: {
		"HomePage": HomePageStore,
		"CrudPage": CrudPageStore
	}
})
