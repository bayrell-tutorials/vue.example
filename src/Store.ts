import { createStore, Store } from 'vuex'
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


/**
 * Create test store
 */
export function initStore (store: Store<{}>)
{
	let state: Record<string, any> = store.state;
	
	/* Main Page */
	let home_page: HomePageState = new HomePageState();
	state["HomePage"] = home_page;

	/* Task List Page */
	let crud_page: CrudPageState = new CrudPageState();
	state["CrudPage"] = crud_page;
}