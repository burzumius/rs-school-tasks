import { Component } from 'react';

import style from './ItemList.module.scss';

import Item from './components/Item/Item';

import { IAstroObject } from '../../helpers/types';

interface ItemListProps {
	items: IAstroObject[];
}

export default class ItemList extends Component<ItemListProps> {
	render() {
		const { items } = this.props;

		return (
			<section className={style.itemListContainer}>
				<ul className={style.itemList}>
					{items.map((item) => {
						return <Item item={item} key={item.uid} />;
					})}
				</ul>
			</section>
		);
	}
}
