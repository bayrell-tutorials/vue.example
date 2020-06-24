<style lang="scss" scoped>
.list{
	&__item{
		display: block;
		text-align: left;
		cursor: pointer;
		padding: 10px;
	}
	&__item.active{
		background-color: blue;
		color: white;
	}
}
</style>


<template>
	<div class='list' v-if="model.items != null">
		<div v-for="item in model.items" :key="item.id" class="list__item"
			v-bind:class="{ active: item.id == active_id }"
			v-on:click="onSelect(item.id)"
		>
			{{ item.name }}
		</div>
	</div>
</template>


<script>


export default
{
	props: ['namespace'],
	buildStore: (state) =>
	{
		if (state == null || state == undefined)
		{
			state = 
			{
				items: [],
				active_id: -1,
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
				select (state, id)
				{
					state.active_id = id;
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
		active_id ()
		{
			return this.model.active_id;
		},
		list ()
		{
			return this.model.list;
		},
	},
	methods:
	{
		onSelect: function (id)
		{
			this.storeCommit("select", id);
			this.$emit("select", id);
		},
	},
	components:
	{
	},
}

</script>
