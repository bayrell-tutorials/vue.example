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

<script src='./ListComponent.js' lang='js'></script>
