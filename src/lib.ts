
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
