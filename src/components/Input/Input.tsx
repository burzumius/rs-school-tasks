import { Component } from 'react';

import style from './Input.module.scss';

import classNames from 'classnames';

interface InputProps {
	name?: string;
	type?: string;
	placeholderText?: string;
	labelText?: string;
	inputClassName?: string;
	labelClassName?: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default class Input extends Component<InputProps> {
	render() {
		const {
			name,
			type,
			placeholderText,
			labelText,
			inputClassName,
			labelClassName,
			value,
			onChange,
		} = this.props;

		const inputClasses = classNames(style.input, inputClassName);
		const labelClasses = classNames(style.label, labelClassName);

		return (
			<>
				<label htmlFor={name} className={labelClasses}>
					{labelText}
				</label>
				<input
					className={inputClasses}
					type={type}
					placeholder={placeholderText}
					value={value}
					onChange={onChange}
				/>
			</>
		);
	}
}
