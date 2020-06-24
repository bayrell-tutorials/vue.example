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
			<input name='name' v-on:change="onChange('name', $event)" v-bind:value="model.item.name" />
		</div>
		
		<div class='form__buttons'>
			<button v-on:click="onSave">Save</button>
		</div>
	</div>
</template>


<script>


export default
{
	props: ['namespace'],
	buildStore: (state) =>
	{
		if (state == null || state == undefined)
		{
			state = 
			{
				item: null,
			};
		}
		
		var res =
		{
			namespaced: true,
			state: () => { return state; },
			modules:
			{
			},
			mutations:
			{
				change (state, obj)
				{
					var field = obj.field;
					var value = obj.value;
					
					/* Copy object with new value */
					var m = {}; m[field] = value;
					state.item = Object.assign({}, state.item, m);
				},
			},
		}
		
		return res;
	},
	computed:
	{
		model()
		{
			return this.getModel();
		},
	},
	methods:
	{
		onChange: function (name, e)
		{
			this.storeCommit("change", {"field": "name", "value": e.target.value});
			this.$emit("change", {"field": "name", "value": e.target.value});
		},
		
		onSave: function ()
		{
			this.$emit("save");
		},
	},
	components:
	{
	},
}

</script>
