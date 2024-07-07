import { IAstroObject } from '../helpers/types';

const baseUrl = 'https://stapi.co/api/v1/rest';

const delay = (amount: number) =>
	new Promise((resolve) => setTimeout(resolve, amount));

const fetchItems = async () => {
	try {
		await delay(2000);

		const response = await fetch(
			`${baseUrl}/astronomicalObject/search?pageNumber=1&pageSize=20`
		);

		if (!response.ok) {
			throw new Error('failed to fetch');
		}

		const data = await response.json();

		return data.astronomicalObjects as IAstroObject[];
	} catch (e) {
		console.error(e);
	}
};

export { fetchItems };
