import { defineComponent } from 'vue';
import { mixin } from "@/lib";

export default defineComponent({
	mixins: [ mixin ],
	computed:
	{
	},
	methods:
	{
		onSelect: function (id)
		{
			this.storeCommit("select", id);
			this.$emit("select", id);
		},
	}
});
