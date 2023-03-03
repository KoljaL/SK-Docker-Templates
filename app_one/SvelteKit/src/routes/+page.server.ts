import type { PageServerLoad, Actions } from './$types';

export const load = (async ({}) => {
	// const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
	const data = await fetch('http://localhost:8055/items/Article')
		.then((response) => response.json())
		.then((json) => json);

	// console.log(data);

	return {
		data
	};
}) satisfies PageServerLoad;
