<style lang="scss" scoped>
</style>


<template>
    Page not found
</template>


<script lang="ts">

import { defineComponent } from 'vue';
import { mixin } from "vue-helper";

export default defineComponent({
	mixins: [ mixin ],
	computed:
	{
	},
	methods:
	{
	},
	mounted()
	{
		(this as any).setPageTitle("Page not found");
	}
});

</script>
