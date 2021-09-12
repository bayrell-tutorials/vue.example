<style lang="scss" scoped>
.page_home{
	padding: 20px;
}
</style>


<template>
	<slot name="top"></slot>
	<div class="page_home">
		Wellcome {{ model.name }}!
	</div>
	<slot name="bottom"></slot>
</template>


<script lang="js">

import { defineComponent } from 'vue';
import { mixin } from "vue-helper";


export const HomePage =
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
		this.setPageTitle("Home Page");
	}
};

export default defineComponent(HomePage);

</script>
