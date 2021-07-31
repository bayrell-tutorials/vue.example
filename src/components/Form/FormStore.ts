import { createStore } from 'vuex'

export interface FormState
{
	item: Record<string, any>
}

export const FormStore = () =>
({
	namespaced: true,
	state:
	{
		item: {},
	},
	mutations:
	{
		/**
		 * Change item
		 */
		change (state: FormState, obj: Record<string, any>)
		{
			let field = obj.field;
			let value = obj.value;
			
			/* Copy object with new value */
			let m:Record<string, any> = {}; m[field] = value;
			state.item = Object.assign({}, state.item, m);
		},
	},
	actions:
	{
	},
	modules:
	{
	}
})
