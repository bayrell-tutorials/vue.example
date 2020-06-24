export function getById(list, id)
{
	for (var i=0; i<list.length; i++)
	{
		if (list[i].id == id) return list[i];
	}
	return null;
}


export function findIndex(list, id)
{
	for (var i=0; i<list.length; i++)
	{
		if (list[i].id == id) return i;
	}
	return -1;
}