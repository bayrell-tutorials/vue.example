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
			this.storeCommit("select");
		},
		
		onSave: function ()
		{
			this.storeCommit("save");
			this.$forceUpdate();
		},
	},
	components:
	{
		Form: Form,
		List: List,
	},
});
