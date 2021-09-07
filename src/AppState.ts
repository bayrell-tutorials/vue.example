import { HomePageState } from './pages/Home/HomePageState'
import { CrudPageState } from './pages/Crud/CrudPageState'
import { NotFoundPageState } from './pages/NotFound/NotFoundPageState'


export class AppState
{
	HomePage: HomePageState = new HomePageState();
	CrudPage: CrudPageState = new CrudPageState();
	NotFound: NotFoundPageState = new NotFoundPageState();
}
