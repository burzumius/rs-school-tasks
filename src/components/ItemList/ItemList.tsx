import style from './ItemList.module.scss';

import { IAstroObjects } from '../../helpers/types';
import { NavLink } from 'react-router-dom';

interface ItemListProps {
	items: IAstroObjects[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
	return (
		<section className={style.itemListContainer}>
			<ol className={style.itemList}>
				{items.map((item) => {
					return (
						<li key={item.uid}>
							<NavLink
								to={`/items/${item.uid}`}
								className={({ isActive }) =>
									`${style.link} ${isActive ? style.active : ''}`
								}
							>
								<h3 className={style.itemName}>{item.name}</h3>
							</NavLink>
						</li>
					);
				})}
			</ol>
		</section>
	);
};

export default ItemList;
