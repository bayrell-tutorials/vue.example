<style lang="scss" scoped>
</style>


<template>
    Page not found
</template>


<script lang="ts">

import { defineComponent } from 'vue';
import { mixin } from "vue-helper";

export const NotFoundPage = 
{
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
};

export default defineComponent(NotFoundPage);

</script>
