import { Component } from 'react';

import style from './Loader.module.scss';

import { TbGalaxy } from 'react-icons/tb';

export default class Loader extends Component {
	render(): React.ReactNode {
		return (
			<div className={style.loader}>
				<TbGalaxy size={100} />
			</div>
		);
	}
}
