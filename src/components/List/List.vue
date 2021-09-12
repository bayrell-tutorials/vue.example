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
			v-bind:class="{ active: item.id == model.active_id }"
			v-on:click="onSelect(item.id)"
		>
			{{ item.name }}
		</div>
	</div>
</template>


<script lang='js'>

import { defineComponent } from 'vue';
import { mixin } from "vue-helper";


export const List =
{
	mixins: [ mixin ],
	computed:
	{
	},
	methods:
	{
		onSelect: function (id)
		{
			this.model.select(id);
			this.$emit("select");
		},
	}
};

export default defineComponent(List);

</script>
