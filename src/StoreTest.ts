import { Store } from "vuex";
import { HomePageState } from "./pages/Home/HomePageState";
import { CrudPageState } from "./pages/Crud/CrudPageState";

/**
 * Create test store
 */
export function createTestStore (store: Store<{}>)
{
	let state: Record<string, any> = store.state;
	
	/* Home Page */
	let main_page: HomePageState = state["HomePage"];
	main_page.name = "Test12345";

	/* Main Page */
	let crud_page: CrudPageState = state["CrudPage"];
	crud_page.List.items.push({ "id": 1, "name": "Test 1" });
	crud_page.List.items.push({ "id": 2, "name": "Test 2" });
	crud_page.List.items.push({ "id": 3, "name": "Test 3" });
}