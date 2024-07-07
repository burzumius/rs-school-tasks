import { Component } from 'react';

import { TbGalaxy } from 'react-icons/tb';
import style from './Loader.module.scss';

export default class Loader extends Component {
	render(): React.ReactNode {
		return (
			<div className={style.loader}>
				<TbGalaxy size={100} />
			</div>
		);
	}
}
