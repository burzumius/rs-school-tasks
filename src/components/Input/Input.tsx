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
const Input: React.FC<InputProps> = ({
	name,
	type,
	placeholderText,
	labelText,
	inputClassName,
	labelClassName,
	value,
	onChange,
}) => {
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
};

export default Input;
