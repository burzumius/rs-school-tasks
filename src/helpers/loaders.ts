import { LoaderFunctionArgs } from 'react-router-dom';
import { getItem } from '../services/serverAPI';

export const loader = async ({
	params,
}: LoaderFunctionArgs<{ itemId: string }>) => {
	const itemId = params.itemId;

	if (!itemId) {
		throw new Error('itemId is required');
	}

	const item = await getItem(itemId);
	return { item };
};
