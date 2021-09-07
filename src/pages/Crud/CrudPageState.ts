import { createStore } from 'vuex'
import { ListState } from '@/components/List/ListState';
import { FormState } from '@/components/Form/FormState';
import { getById, findIndex } from "@/lib";
import { deepClone } from 'vue-helper';

export class CrudPageState
{
	List: ListState = new ListState();
	FormEdit: FormState = new FormState();
	
	
	/**
	 * Select active item
	 */
	selectActiveItem()
	{
		let item = getById(this.List.items, this.List.active_id);
		this.FormEdit.item = deepClone(item);
	}
	
	
	/**
	 * Save form
	 */
	saveForm()
	{
		let index = findIndex(this.List.items, this.List.active_id);
		if (index != -1)
		{
			this.List.items[index] = deepClone(this.FormEdit.item);
		}
	};
	
}
