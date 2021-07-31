import { HomePageState } from './pages/Home/HomePageState'
import { CrudPageState } from './pages/Crud/CrudPageState'
import { Store } from 'vuex';


export class AppState
{
	HomePage: HomePageState = new HomePageState();
	CrudPage: CrudPageState = new CrudPageState();


	/**
	 * Returns methods list
	 */
	static mutations(): Array<string>
	{
		let res: Array<string> =
		[
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
			"HomePage": HomePageState,
			"CrudPage": CrudPageState,
		};
		return res;
	}

}
