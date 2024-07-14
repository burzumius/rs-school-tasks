import { useNavigate } from 'react-router-dom';
import style from './NotFound.module.scss';
import Button from '../Button/Button';

interface NotFoundProps {}

export const NotFound: React.FC<NotFoundProps> = () => {
	const navigate = useNavigate();

	return (
		<div className={style.notFoundContainer}>
			<h2>404 Page Not Found :(</h2>
			<Button text='go home' onClick={() => navigate('/')} />
		</div>
	);
};

export default NotFound;
