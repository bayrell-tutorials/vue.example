import { createStore } from 'vuex'

export interface ListState
{
	items: Array<{}>;
	active_id: number;
}

export const ListStore = () =>
({
	namespaced: true,
	state:
	{
		items: new Array<{}>(),
		active_id: 0,
	},
	mutations:
	{

		/**
		 * Select item
		 */
		select (state: ListState, id: number)
		{
			state.active_id = id;
		},

	},
	actions:
	{
	},
	modules:
	{
	}
})
