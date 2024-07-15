import style from './Button.module.scss';

import classNames from 'classnames';

interface ButtonProps {
	text?: string;
	type?: 'button' | 'submit' | 'reset';
	onClick?: () => void;
	className?: string;
	disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, type, onClick, className }) => {
	const buttonClasses = classNames(style.button, className);

	return (
		<button type={type} className={buttonClasses} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
