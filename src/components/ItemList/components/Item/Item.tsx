import { useLoaderData } from 'react-router-dom';
import { IAstroObject } from '../../../../helpers/types';

import style from './Item.module.scss';

interface ItemData {
	item: IAstroObject;
}

export interface LoaderParams {
	itemId: string;
}

const Item: React.FC = () => {
	const { item } = useLoaderData() as ItemData;

	return (
		<li className={style.item}>
			<h2>{item.name}</h2>

			<p>
				Type: <b>{item.astronomicalObjectType?.replace(/_/g, ' ')}</b>
			</p>
			{item.location && (
				<>
					<p>
						Location: <b>{item.location?.name}</b>
					</p>

					{item.location?.astronomicalObjectType && (
						<p>
							{item.location.name} type:{' '}
							<b>{item.location?.astronomicalObjectType.replace(/_/g, ' ')}</b>
						</p>
					)}

					{item.location.location && (
						<p>
							{item.location.name} location:{' '}
							<b>{item.location.location?.name}</b>
						</p>
					)}
				</>
			)}
		</li>
	);
};

export default Item;
