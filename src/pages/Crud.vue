<style>
</style>

<template>
	<div class="page_crud">
		
		<div class='page_crud__list'>
			<div v-for="item in list" :key="item.id" class="page_crud__list_item"
				v-bind:class="{ active: item.id == active_id }"
				v-on:click="select(item.id)"
			>
				{{ item.name }}
			</div>
		</div>
		
		<div class='page_crud__form' v-if="item != null">
			<div class='page_crud__form_row'>
				<label>Name</label>
				<input name='name' v-on:change="onChange('name', $event)" v-bind:value="item.name" />
			</div>
		</div>
		
	</div>
</template>

<script>

import { getById, findIndex } from '../lib.js'

var store = () => (
{
	namespaced: true,
	
	state: () => ({
		"active_id": 0,
		"list": [
			{
				"id": 1,
				"name": "Name 1",
			},
			{
				"id": 2,
				"name": "Name 2",
			},
			{
				"id": 3,
				"name": "Name 3",
			},
		],
	}),
	
	mutations:
	{
		
		select (state, id)
		{
			state.active_id = id;
		},
		
		change (state, obj)
		{
			var index = findIndex(state.list, state.active_id);
			state.list[index][obj.field] = obj.value;
		},
		
	},
});

export default
{
	name: 'Crud',
	buildStore: store,
	computed:
	{
		model()
		{
			return this.$store.state.page.crud;
		},
		active_id ()
		{
			return this.model.active_id;
		},
		list ()
		{
			return this.model.list;
		},
		item ()
		{
			var item = getById(this.model.list, this.model.active_id);
			return item;
		}
	},
	methods:
	{
		select: function (id)
		{
			this.$store.commit("page/crud/select", id);
		},
		
		onChange: function (name, e)
		{
			this.$store.commit("page/crud/change", {"field": "name", "value": e.target.value});
		},
	},
	components:
	{
	},
}

</script>
