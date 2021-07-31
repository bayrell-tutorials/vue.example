<style lang="scss" scoped>
.form{
	&__row{
		label{
			font-weight: bold;
			display: block;
			text-align: left;
			padding-bottom: 5px;
		}
		input{
			width: 100%;
			padding: 6px 12px;
		}
	}
	&__buttons{
		text-align: center;
	}
	button{
		padding: 6px 12px;
		cursor: pointer;
	}
}
</style>


<template>
	<div class='form' v-if="model.item != null">
		<div class='form__row'>
			<label>Name</label>
			<input name='name'
				v-on:change="onChange('name', $event)"
				v-bind:value="model.item.name"
			/>
		</div>
		
		<div class='form__buttons'>
			<button v-on:click="onSave">Save</button>
		</div>
	</div>
</template>


<script lang='js'>

import { defineComponent } from 'vue';
import { mixin } from "vue-helper";

export default defineComponent({
	mixins: [ mixin ],
	computed:
	{
	},
	methods:
	{
		onChange: function (name, e)
		{
			this.$commit("change", {"field": "name", "value": e.target.value});
			this.$emit("change", {"field": "name", "value": e.target.value});
		},
		onSave: function ()
		{
			this.$emit("save");
		},
	}
});

</script>
