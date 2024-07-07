import { Component } from 'react';
import style from './SearchBar.module.scss';

import Input from '../Input/Input';
import Button from '../Button/Button';

interface SearchBarProps {
	handleSearch: (searchQuery: string) => void;
}

export default class SearchBar extends Component<SearchBarProps> {
	localStorageValue = localStorage.getItem('searchQuery');

	state = {
		searchQuery: this.localStorageValue || '',
	};

	handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;

		this.setState({
			searchQuery: value,
		});

		if (value.trim()) {
			localStorage.setItem('searchQuery', value.trim());
		}
	};

	//search on enter
	handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') {
			this.props.handleSearch(this.state.searchQuery.trim());
		}
	};
	render() {
		const { searchQuery } = this.state;
		const { handleSearch } = this.props;

		return (
			<section
				className={style.searchBarContainer}
				onKeyDown={this.handleKeyDown}
			>
				<Input
					placeholderText='Type name or location here...'
					inputClassName={style.input}
					value={searchQuery}
					onChange={this.handleInputChange}
				/>
				<Button
					text='search'
					className={style.button}
					onClick={() => handleSearch(searchQuery.trim())}
				/>
			</section>
		);
	}
}
