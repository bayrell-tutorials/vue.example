import { createStore } from 'vuex'
import { ListStore, ListState } from '@/components/List/ListStore';
import { FormStore, FormState } from '@/components/Form/FormStore';
import { getById, findIndex } from "@/lib";

export interface CrudPageState
{
}

export const CrudPageStore = createStore<CrudPageState>({
	state:
	{
	},
	mutations:
	{
		select (state: Record<string, any>)
		{
			let item = getById(state.List.items, state.List.active_id);
			state.FormEdit.item = Object.assign({}, item);
		},
		save (state: Record<string, any>)
		{
			let index = findIndex(state.List.items, state.List.active_id);
			if (index != -1)
			{
				state.List.items[index] = state.FormEdit.item;
			}
		},
	},
	actions:
	{
	},
	modules:
	{
		"List": ListStore,
		"FormEdit": FormStore,
	}
})
