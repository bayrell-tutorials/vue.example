export class ListState
{
	items: Array<{}> = new Array<{}>();
	active_id: number = 0;


	/**
	 * Select item
	 */
	select (id: number)
	{
		this.active_id = id;
	};
	
}
