import {
	ButtonHTMLAttributes,
	ReactHTMLElement,
	useCallback,
	useEffect,
	useState,
} from 'react';

import style from './Sidebar.module.scss';

import useLocalStorage from '../../helpers/hooks/useLocalStorage';
import { IAstroObjects } from '../../helpers/types';
import { fetchItems } from '../../services/serverAPI';

import ItemList from '../ItemList/ItemList';
import SearchBar from '../SearchBar/SearchBar';
import Loader from '../Loader/Loader';
import { useNavigate } from 'react-router-dom';
import Button from '../Button/Button';

export const Sidebar: React.FC = () => {
	const [items, setItems] = useState<IAstroObjects[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [lSSearchQuery, setLSSearchQuery] = useLocalStorage('searchQuery');

	const navigate = useNavigate();

	const handleClose = () => {
		navigate('/');
	};

	const handleSearch = useCallback(
		async (searchQuery?: string) => {
			setIsLoading(true);

			setLSSearchQuery(searchQuery);

			try {
				const data = await fetchItems(searchQuery);

				if (data) {
					setItems(data);
				}
			} catch (e) {
				console.error(e);
			} finally {
				setIsLoading(false);
			}
		},
		[setLSSearchQuery]
	);

	useEffect(() => {
		if (lSSearchQuery) {
			handleSearch(lSSearchQuery);
		} else {
			handleSearch();
		}
	}, [handleSearch, lSSearchQuery]);

	let appContent;

	if (isLoading) {
		appContent = <Loader />;
	} else if (items.length) {
		appContent = <ItemList items={items} />;
	} else {
		appContent = <h2>Object '{lSSearchQuery}' not found</h2>;
	}
	return (
		<aside className={style.sidebar}>
			<Button
				text='close'
				className={style.closeButton}
				onClick={handleClose}
			/>
			<SearchBar isLoading={isLoading} handleSearch={handleSearch} />
			<div>{appContent}</div>
		</aside>
	);
};

export default Sidebar;
