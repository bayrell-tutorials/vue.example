import { defineComponent } from 'vue';
import { mixin } from "@/lib";

export default defineComponent({
	mixins: [ mixin ],
	computed:
	{
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
	}
});
