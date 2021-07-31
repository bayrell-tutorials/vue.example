import { createStore } from 'vuex'
import { buildStore } from '@/lib';
import { HomePageState } from './pages/Home/HomePageState'
import { CrudPageState } from './pages/Crud/CrudPageState'


/**
 * Create store
 */
export default createStore({
	modules:
	{
		"HomePage": buildStore(HomePageState),
		"CrudPage": buildStore(CrudPageState),
	}
})
