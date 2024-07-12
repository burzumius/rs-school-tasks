import { IAstroObject } from '../../../../helpers/types';

interface ItemProps {
	item: IAstroObject;
}

const Item: React.FC<ItemProps> = ({ item }) => {
	return (
		<li>
			<h2>{item.name}</h2>
			<p>
				<b>location:</b> {item.location?.name}
			</p>
		</li>
	);
};

export default Item;
