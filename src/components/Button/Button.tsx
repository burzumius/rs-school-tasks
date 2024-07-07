import { Component } from 'react';

import style from './Button.module.scss';
import classNames from 'classnames';

interface ButtonProps {
	text?: string;
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
	className?: string;
}

export default class Button extends Component<ButtonProps> {
	render() {
		const { text, type = 'button', onClick, className } = this.props;

		const buttonClasses = classNames(style.button, className);

		return (
			<button type={type} className={buttonClasses} onClick={onClick}>
				{text}
			</button>
		);
	}
}
