export function getById(list: Array<Record<string, any>>, id: number)
{
	for (let i=0; i<list.length; i++)
	{
		if (list[i].id == id) return list[i];
	}
	return null;
}

export function findIndex(list: Array<Record<string, any>>, id: number)
{
	for (let i=0; i<list.length; i++)
	{
		if (list[i].id == id) return i;
	}
	return -1;
}



/**
 * Returns VueJS model
 */
export const getModel = (instance: any) =>
{
	let arr = instance.namespace.slice();
	let obj = instance.$store.state;
	
	while (arr.length != 0)
	{
		let key = arr.shift();
		if (obj[key] == undefined)
		{
			obj = null;
			break;
		}
		obj = obj[key];
	}
	
	return obj;
};



/**
 * Returns mutations list from class state prototype
 */
export function getMutations (proto: any): Record<string, any>
{
	let res: Record<string, any> = {};
	let items:Array<string> = proto.mutations();
	for (let i = 0; i < items.length; i++)
	{
		let method_name = items[i];
		res[method_name] = proto[method_name];
	}
	return res;
}



/**
 * Build store from class state prototype
 */
export function buildStore (proto: any): Record<string, any>
{
	/* Create store */
	let res: Record<string, any> =
	{
		namespaced: true,
		modules:
		{
		}
	};

	/* Build modules */
	let modules:Record<string, any> = proto.modules();
	let modules_keys:Array<string> = Object.keys(modules);
	for (let i=0; i<modules_keys.length; i++)
	{
		let module_name:string = modules_keys[i];
		let module:any = modules[module_name];
		res["modules"][modules_keys[i]] = buildStore(module);
	}

	/* Get mutations  */
	res["mutations"] = getMutations(proto);
	
	/* Returns store */
	return res;
}



/**
 * VueJS Mixin
 */
export const mixin =
{
	props:
	{
		namespace: Array
	},
	computed:
	{
		model()
		{
			return getModel(this);
		}
	},
	methods:
	{
		getModel()
		{
			return getModel(this);
		},
		$commit (action: string, params: any)
		{
			let obj: any = this;
			var arr = obj.namespace.concat( action.split("/") );
			obj.$store.commit(arr.join("/"), params);
		},
	}
};