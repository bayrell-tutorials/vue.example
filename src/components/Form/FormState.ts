export class FormState
{
	item: Record<string, any> = {};
	
	
	/**
	 * Change item
	 */
	changeItem(field:string, value:any)
	{
		let m:Record<string, any> = {}; m[field] = value;
		this.item = Object.assign({}, this.item, m);
	}
	
}
