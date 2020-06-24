<style>
</style>


<template>
	<div class="page_crud">
		<div class='page_crud__list'>
			<List v-bind:namespace="namespace.concat('List')"
				v-on:select="onSelect"
			></List>
		</div>
		<div class='page_crud__form'>
			<Form v-bind:namespace="namespace.concat('FormEdit')"
				v-on:save="onSave"
			></Form>
		</div>
	</div>
</template>


<script>

import Form from '../components/Form.vue'
import List from '../components/List.vue'
import { getById, findIndex } from '../lib.js'


export default
{
	props: ['namespace'],
	buildStore: (state) =>
	{
		if (state == null || state == undefined)
		{
			state = {};
		}
		
		var res =
		{
			namespaced: true,
			state: () => { return state; },
			modules:
			{
				"List": List.buildStore(),
				"FormEdit": Form.buildStore(),
			},
			mutations:
			{
				select (state)
				{
					var item = getById(state.List.items, state.List.active_id);
					state.FormEdit.item = Object.assign({}, item);
				},
				
				save (state)
				{
					var index = findIndex(state.List.items, state.List.active_id);
					if (index != -1)
					{
						state.List.items[index] = state.FormEdit.item;
					}
				},
			},
		}
		
		return res;
	},
	computed:
	{
		model()
		{
			return this.getModel();
		},
	},
	methods:
	{
		onSelect: function ()
		{
			this.storeCommit("select");
		},
		
		onSave: function ()
		{
			this.storeCommit("save");
			this.$forceUpdate();
		},
	},
	components:
	{
		Form: Form,
		List: List,
	},
}

</script>
