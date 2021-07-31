import { Store } from "vuex";
import { AppState } from "./AppState";

/**
 * Create test store
 */
export function initTestStore (store: Store<AppState>)
{
	/* Home Page */
	store.state.HomePage.name = "Test12345";

	/* Main Page */
	store.state.CrudPage.List.items.push({ "id": 1, "name": "Test 1" });
	store.state.CrudPage.List.items.push({ "id": 2, "name": "Test 2" });
	store.state.CrudPage.List.items.push({ "id": 3, "name": "Test 3" });
}
