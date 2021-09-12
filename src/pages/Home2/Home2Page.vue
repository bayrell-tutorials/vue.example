<style lang="scss" scoped>
</style>


<template>
	<HomePage v-bind:store_path="store_path" />
</template>


<script lang="js">

import { defineComponent } from 'vue';
import { HomePage } from '../Home/HomePage.vue';


export const Home2Page =
{
	extends: HomePage,
	components: { HomePage },
	computed:
	{
	},
	methods:
	{
	},
	mounted()
	{
		this.setPageTitle("Home 2 Page");
	}
};

export default defineComponent(Home2Page);

</script>
