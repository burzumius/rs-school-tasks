import { useState } from 'react';
import style from './SearchBar.module.scss';

import Input from '../Input/Input';
import Button from '../Button/Button';

interface SearchBarProps {
	handleSearch: (searchQuery: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
	const localStorageValue = localStorage.getItem('searchQuery');
	const [searchQuery, setSearchQuery] = useState(localStorageValue || '');

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		setSearchQuery(value);

		if (value.trim()) {
			localStorage.setItem('searchQuery', value.trim());
		}
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			handleSearch(searchQuery.trim());
		}
	};

	return (
		<section className={style.searchBarContainer} onKeyDown={handleKeyDown}>
			<Input
				placeholderText='Type name or location here...'
				inputClassName={style.input}
				value={searchQuery}
				onChange={handleInputChange}
			/>
			<Button
				text='search'
				className={style.button}
				onClick={() => handleSearch(searchQuery.trim())}
			/>
		</section>
	);
};

export default SearchBar;
