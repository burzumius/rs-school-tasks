import { TbGalaxy } from 'react-icons/tb';
import style from './Loader.module.scss';

const Loader: React.FC = () => {
	return (
		<div className={style.loader}>
			<TbGalaxy size={100} />
		</div>
	);
};

export default Loader;
