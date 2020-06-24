import Vue from 'vue'
import Vuex from 'vuex'
import { getById, findIndex } from './lib.js'


export default function(params)
{
	params["store"] = new Vuex.Store({
		modules:
		{
			page:
			{
				namespaced: true,
				state: () => ({}),
				mutations: {},
			},
		},
	});
	
	return params;
}
