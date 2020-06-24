<style>
</style>


<template>
	<div class="page_home">
		Wellcome {{ model.name }}!
	</div>
</template>


<script>

import { List, Map } from 'immutable'


export default
{
	props: ['namespace'],
	buildStore: (state) =>
	{
		if (state == null || state == undefined)
		{
			state =
			{
				"name": "Username",
			};
		}
		
		var res =
		{
			namespaced: true,
			state: () => { return state; },
			modules:
			{
			},
			mutations:
			{
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
	components:
	{
	},
}
</script>
