import { IAstroObject } from '../../../../helpers/types';

import style from './Item.module.scss';

interface ItemProps {
	item: IAstroObject;
}

import { Component } from 'react';

export default class Item extends Component<ItemProps> {
	render() {
		const { item } = this.props;

		return (
			<li className={style.item}>
				<h2 className={style.name}>{item.name}</h2>
				<p>
					type: <b>{item.astronomicalObjectType?.replace(/_/g, ' ')}</b>
				</p>
				<p className={style.location}>
					{item.location && (
						<>
							location: <b>{item.location?.name}</b>
						</>
					)}
				</p>
			</li>
		);
	}
}
