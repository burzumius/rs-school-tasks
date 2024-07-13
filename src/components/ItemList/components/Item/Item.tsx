import { IAstroObject } from '../../../../helpers/types';

import style from './Item.module.scss';

interface ItemProps {
	item: IAstroObject;
}

const Item: React.FC<ItemProps> = ({ item }) => {
	return (
		<li className={style.item}>
			<h2>{item.name}</h2>
			<p>
				<b>location:</b> {item.location?.name}
			</p>
		</li>
	);
};

export default Item;
