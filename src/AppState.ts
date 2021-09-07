import { HomePageState } from './pages/Home/HomePageState'
import { CrudPageState } from './pages/Crud/CrudPageState'


export class AppState
{
	HomePage: HomePageState = new HomePageState();
	CrudPage: CrudPageState = new CrudPageState();
}
