<style lang="scss" scoped>
</style>


<template>
	<div class="page_home">
		Wellcome {{ model.name }}!
	</div>
</template>


<script lang="js">

import { defineComponent } from 'vue';
import { mixin } from "vue-helper";

export default defineComponent({
	mixins: [ mixin ],
	computed:
	{
	},
	methods:
	{
	}
});

</script>
