import { createStore } from 'vuex'

export interface FormState
{
	item: Record<string, any>
}

export const FormStore = createStore<FormState>({
	state:
	{
		item: {},
	},
	mutations:
	{
		/**
		 * Change item
		 */
		change (state: FormState, obj)
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
