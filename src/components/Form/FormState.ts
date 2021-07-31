export class FormState
{
	item: Record<string, any> = {};

	
	/**
	 * Change item
	 */
	static change (state: FormState, obj: Record<string, any>)
	{
		let field = obj.field;
		let value = obj.value;
		
		/* Copy object with new value */
		let m:Record<string, any> = {}; m[field] = value;
		state.item = Object.assign({}, state.item, m);
	};


	/**
	 * Returns methods list
	 */
	static mutations(): Array<string>
	{
		let res: Array<string> =
		[
			"change",
		];
		return res;
	}


	/**
	 * Returns modules
	 */
	static modules(): Record<string, any>
	{
		let res: Record<string, any> =
		{
		};
		return res;
	}
}
