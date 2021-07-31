import { createStore } from 'vuex'
import { ListState } from '@/components/List/ListState';
import { FormState } from '@/components/Form/FormState';
import { getById, findIndex } from "@/lib";

export class CrudPageState
{
	List: ListState = new ListState();
	FormEdit: FormState = new FormState();
	
	/**
	 * Select
	 */
	static select (state: CrudPageState)
	{
		let item = getById(state.List.items, state.List.active_id);
		state.FormEdit.item = Object.assign({}, item);
	};


	/**
	 * Save
	 */
	static save (state: CrudPageState)
	{
		let index = findIndex(state.List.items, state.List.active_id);
		if (index != -1)
		{
			state.List.items[index] = state.FormEdit.item;
		}
	};


	/**
	 * Returns methods list
	 */
	static mutations(): Array<string>
	{
		let res: Array<string> =
		[
			"select",
			"save",
		];
		return res;
	}


	/**
	 * Returns modules
	 */
	static modules(): Record<string, any>
	{
		let res: Record<string, any> =
		{
			"List": ListState,
			"FormEdit": FormState,
		};
		return res;
	}
}
