<style lang="scss" scoped>
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
				v-if="model.List.active_id != 0"
				v-on:save="onSave"
			></Form>
		</div>
	</div>
</template>

<script src="./CrudPageComponent.js" lang="js"></script>