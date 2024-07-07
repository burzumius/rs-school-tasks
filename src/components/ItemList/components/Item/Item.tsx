import { IAstroObject } from '../../../../helpers/types';

interface ItemProps {
	item: IAstroObject;
}

import { Component } from 'react';

export default class Item extends Component<ItemProps> {
	render() {
		const { item } = this.props;

		return (
			<li>
				<h2>{item.name}</h2>
				<p>
					<b>location:</b> {item.location?.name}
				</p>
			</li>
		);
	}
}
