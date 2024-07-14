import { Outlet, useLocation } from 'react-router-dom';
import style from './App.module.scss';

import Sidebar from './components/Sidebar/Sidebar';
import { IAstroObjects } from './helpers/types';
import useLocalStorage from './helpers/hooks/useLocalStorage';
import { useState, useCallback, useEffect } from 'react';
import ItemList from './components/ItemList/ItemList';
import Loader from './components/Loader/Loader';
import SearchBar from './components/SearchBar/SearchBar';
import { fetchItems } from './services/serverAPI';

const App = () => {
	const [items, setItems] = useState<IAstroObjects[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [lSSearchQuery, setLSSearchQuery] = useLocalStorage('searchQuery');
	const location = useLocation();

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
		<>
			{location.pathname === '/' ? (
				<div className={style.appContainer}>
					<SearchBar isLoading={isLoading} handleSearch={handleSearch} />
					<div>{appContent}</div>
				</div>
			) : (
				<Outlet />
			)}
		</>
	);
};

export default App;
