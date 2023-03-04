import type { PageServerLoad, Actions } from './$types';

export const load = (async ({}) => {
	// const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
	let article;
	let data;
	try {
		article = await fetch('http://backend:8055/items/Article');
	} catch (error) {
		console.log('PAGESERVER ERROR', error);
	}
	data = await article.json();
	// .then((response) => response.json())
	// .then((json) => json);

	console.log('pageserver data', data);

	return {
		data
	};
}) satisfies PageServerLoad;
