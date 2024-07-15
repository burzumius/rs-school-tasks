import { useState } from 'react';
import style from './SearchBar.module.scss';

import useLocalStorage from '../../helpers/hooks/useLocalStorage';

import Input from '../Input/Input';
import Button from '../Button/Button';

interface SearchBarProps {
	handleSearch: (searchQuery: string) => void;
	isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ handleSearch }) => {
	const [searchQuery] = useLocalStorage('searchQuery');
	const [inputValue, setInputValue] = useState(searchQuery);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		handleSearch(inputValue);
	};

	return (
		<form className={style.searchBarContainer} onSubmit={handleSubmit}>
			<Input
				placeholderText='Type object name here...'
				inputClassName={style.input}
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<Button text='search' className={style.button} type='submit' />
		</form>
	);
};

export default SearchBar;
