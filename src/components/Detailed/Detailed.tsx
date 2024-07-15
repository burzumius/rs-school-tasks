import Item from '../ItemList/components/Item/Item';
import Sidebar from '../Sidebar/Sidebar';
import style from './Detailed.module.scss';

interface DetailedProps {}

export const Detailed: React.FC<DetailedProps> = (props) => {
	return (
		<div className={style.container}>
			<Sidebar />
			<div className={style.item}>
				<Item />
			</div>
		</div>
	);
};

export default Detailed;
