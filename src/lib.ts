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
		storeCommit (action: string, params: any)
		{
			let obj: any = this;
			var arr = obj.namespace.concat( action.split("/") );
			obj.$store.commit(arr.join("/"), params);
		},
		storeDispatch (action: string, params: any)
		{
			let obj: any = this;
			let arr = obj.namespace.concat( action.split("/") );
			obj.$store.dispatch(arr.join("/"), params);
		},
	}
};