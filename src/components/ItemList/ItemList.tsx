import { Component } from 'react';
import style from './ItemList.module.scss';

import { IAstroObject } from '../../helpers/types';
import Item from './components/Item/Item';

interface ItemListProps {
	items: IAstroObject[];
}

export default class ItemList extends Component<ItemListProps> {
	render() {
		const { items } = this.props;

		return (
			<section className={style.itemListContainer}>
				<ol className={style.itemList}>
					{items.map((item) => {
						return <Item item={item} key={item.uid} />;
					})}
				</ol>
			</section>
		);
	}
}
