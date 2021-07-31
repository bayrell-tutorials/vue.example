export class ListState
{
	items: Array<{}> = new Array<{}>();
	active_id: number = 0;


	/**
	 * Select item
	 */
	static select (state: ListState, id: number)
	{
		state.active_id = id;
	};


	/**
	 * Returns methods list
	 */
	static mutations(): Array<string>
	{
		let res: Array<string> =
		[
			"select",
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
