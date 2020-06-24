<style>
</style>

<template>
	<div class="page_home">
		Wellcome {{ model.name }}!
	</div>
</template>

<script>

var store = () => (
{
	namespaced: true,
	
	state: () => ({
		"name": "Username",
	}),
	
	mutations:
	{
		
	},
});


export default
{
	name: 'Home',
	buildStore: store,
	props: ['namespace'],
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
