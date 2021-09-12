import { HomePageState } from './pages/Home/HomePageState'
import { Home2PageState } from './pages/Home2/Home2PageState'
import { CrudPageState } from './pages/Crud/CrudPageState'
import { NotFoundPageState } from './pages/NotFound/NotFoundPageState'


export class AppState
{
	HomePage: HomePageState = new HomePageState();
	Home2Page: Home2PageState = new Home2PageState();
	CrudPage: CrudPageState = new CrudPageState();
	NotFound: NotFoundPageState = new NotFoundPageState();
}
