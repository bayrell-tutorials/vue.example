<style lang="scss" scoped>
</style>


<template>
	<div class="page_crud">
		<div class='page_crud__list'>
			<List v-bind:store_path="store_path.concat('List')"
				v-on:select="onSelect"
			></List>
		</div>
		<div class='page_crud__form'>
			<Form v-bind:store_path="store_path.concat('FormEdit')"
				v-if="model.List.active_id != 0"
				v-on:save="onSave"
			></Form>
		</div>
	</div>
</template>

<script lang="js">

import { defineComponent } from 'vue';
import { mixin } from "@/lib";
import Form from '@/components/Form/Form.vue'
import List from '@/components/List/List.vue'

export default defineComponent({
	mixins: [ mixin ],
	computed:
	{
	},
	methods:
	{
		onSelect: function ()
		{
			this.$commit("select");
		},
		
		onSave: function ()
		{
			this.$commit("save");
			this.$forceUpdate();
		},
	},
	components:
	{
		Form: Form,
		List: List,
	},
});


</script>