import { useEffect, useState } from 'react';

import style from './App.module.scss';

import SearchBar from './components/SearchBar/SearchBar';
import ItemList from './components/ItemList/ItemList';
import Loader from './components/Loader/Loader';

import { IAstroObject } from './helpers/types';
import { fetchItems } from './services/serverAPI';
import useLocalStorage from './hooks/useLocalStorage';

const App = () => {
	const [items, setItems] = useState<IAstroObject[]>([]);
	const [isLoading, setIsLoading] = useState(false);
	const [lSSearchQuery] = useLocalStorage('searchQuery');

	const handleSearch = async (searchQuery?: string) => {
		setIsLoading(true);

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
	};

	useEffect(() => {
		if (lSSearchQuery) {
			handleSearch(lSSearchQuery);
		} else {
			handleSearch();
		}
	}, [lSSearchQuery]);

	let appContent;

	if (isLoading) {
		appContent = <Loader />;
	} else if (items.length) {
		appContent = <ItemList items={items} />;
	} else {
		appContent = <h2>Object '{lSSearchQuery}' not found</h2>;
	}

	return (
		<main className={style.appContainer}>
			<div className={style.topSection}>
				<SearchBar handleSearch={handleSearch} isLoading={isLoading} />
			</div>

			<div className={style.appContent}>{appContent}</div>
		</main>
	);
};

export default App;
