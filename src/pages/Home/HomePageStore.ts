import { createStore } from 'vuex'

export interface HomePageState
{
	name: string;
}

export const HomePageStore = () => ({
	namespaced: true,
	state:
	{
		name: ""
	},
	mutations:
	{
	},
	actions:
	{
	},
	modules:
	{
	}
})
