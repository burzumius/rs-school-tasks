import { IAstroObject } from '../helpers/types';

const baseUrl = 'https://stapi.co/api/v1/rest';

const fetchItems = async () => {
	try {
		const response = await fetch(
			`${baseUrl}/astronomicalobject/search?pageNumber=1&pageSize=20`
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
