import { IAstroObject, IAstroObjects } from '../helpers/types';

const baseUrl = 'https://stapi.co/api/v1/rest/astronomicalObject';

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
		const response = await fetch(`${baseUrl}/search`, config);

		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const data = await response.json();

		return data.astronomicalObjects as IAstroObjects[];
	} catch (e) {
		console.error(e);
	}
};

const getItem = async (itemId: string) => {
	try {
		const response = await fetch(`${baseUrl}?uid=${itemId}`);

		if (!response.ok) {
			throw new Error('Failed to fetch');
		}

		const data = await response.json();
		console.log(data);

		return data.astronomicalObject as IAstroObject;
	} catch (e) {
		console.error(e);
	}
};

export { fetchItems, getItem };
