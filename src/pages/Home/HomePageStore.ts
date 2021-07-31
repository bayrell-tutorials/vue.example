import { createStore } from 'vuex'

export interface HomePageState
{
	name: string;
}

export const HomePageStore = createStore<HomePageState>({
	state: {
		name: ""
	},
	mutations: {
	},
	actions: {
	},
	modules: {
	}
})
