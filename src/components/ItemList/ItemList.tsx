import style from './ItemList.module.scss';

import Item from './components/Item/Item';

import { IAstroObject } from '../../helpers/types';

interface ItemListProps {
	items: IAstroObject[];
}

const ItemList: React.FC<ItemListProps> = ({ items }) => {
	return (
		<section className={style.itemListContainer}>
			<ol className={style.itemList}>
				{items.map((item) => {
					return <Item item={item} key={item.uid} />;
				})}
			</ol>
		</section>
	);
};

export default ItemList;
