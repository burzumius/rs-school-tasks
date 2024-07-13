import { IAstroObject } from '../helpers/types';

const url = 'https://stapi.co/api/v1/rest/astronomicalObject/search';

interface IConfig {
	method: string;
	headers: {
		'Content-Type': string;
	};
	body?: string;
}

const fetchItems = async (searchTerm?: string) => {
	const config: IConfig = {
		method: searchTerm ? 'POST' : 'GET',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
	};

	if (searchTerm) {
		const params = new URLSearchParams();
		params.append('name', searchTerm);
		config.body = params.toString();
	}

	try {
		const response = await fetch(url, config);

		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const data = await response.json();

		return data.astronomicalObjects as IAstroObject[];
	} catch (e) {
		console.error(e);
	}
};

export { fetchItems };
