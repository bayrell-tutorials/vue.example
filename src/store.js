import Vue from 'vue'
import Vuex from 'vuex'

var store = function(params)
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
};


/* Init data */
store.init = function(params)
{
	var store = params["store"];
	
	/* set name */
	store.state.page.Home.name = "Test";
	
	/* Items */
	store.state.page.Crud.List.items =
	[
		{
			"id": 1,
			"name": "Name 1",
		},
		{
			"id": 2,
			"name": "Name 2",
		},
		{
			"id": 3,
			"name": "Name 3",
		},
	];
	
	return params;
}


/* Extends vue */
store.install = function (Vue, options)
{
	Vue.prototype.storeCommit = function (action, params)
	{
		var arr = this.namespace.concat( action.split("/") );
		this.$store.commit(arr.join("/"), params);
	};
	
	Vue.prototype.storeDispatch = function (action, params)
	{
		var arr = this.namespace.concat( action.split("/") );
		this.$store.dispatch(arr.join("/"), params);
	};
	
	Vue.prototype.getModel = function ()
	{
		var arr = this.namespace.slice();
		var obj = this.$store.state;
		
		while (arr.length != 0)
		{
			var key = arr.shift();
			if (obj[key] == undefined)
			{
				obj = null;
				break;
			}
			obj = obj[key];
		}
		
		return obj;
	};
	
};


export default store;