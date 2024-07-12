import { Component } from 'react';

import style from './App.module.scss';

import SearchBar from './components/SearchBar/SearchBar';
import ItemList from './components/ItemList/ItemList';
import Loader from './components/Loader/Loader';
import Button from './components/Button/Button';

import { IAstroObject } from './helpers/types';
import { fetchItems } from './services/serverAPI';

interface IAppState {
	items: IAstroObject[];
	isLoading: boolean;
	searchQuery: string;
	throwError: boolean;
	notFound: boolean;
}

export default class App extends Component {
	localStorageValue = localStorage.getItem('searchQuery');

	state: IAppState = {
		items: [],
		isLoading: false,
		searchQuery: '',
		throwError: false,
		notFound: false,
	};

	handleErrorButtonClick = () => {
		this.setState({ throwError: !this.state.throwError });
	};

	handleSearch = async (searchQuery?: string) => {
		this.setState({ isLoading: true, notFound: false });

		try {
			const data = await fetchItems(searchQuery);

			this.setState({
				items: data || [],
				notFound: !data?.length,
				searchQuery,
			});
		} catch (e) {
			console.error(e);
		} finally {
			this.setState({ isLoading: false });
		}
	};

	componentDidMount(): void {
		if (this.localStorageValue) {
			this.handleSearch(this.localStorageValue);
		} else {
			this.handleSearch();
		}
	}

	render() {
		if (this.state.throwError) {
			throw new Error('Test error');
		}

		const { items, isLoading, notFound, searchQuery } = this.state;

		let appContent;

		if (notFound) {
			appContent = <h2>Object '{searchQuery}' not found</h2>;
		} else if (isLoading) {
			appContent = <Loader />;
		} else {
			appContent = <ItemList items={items} />;
		}

		return (
			<main className={style.appContainer}>
				<div className={style.wrapper}>
					<div className={style.topSection}>
						<SearchBar handleSearch={this.handleSearch} isLoading={isLoading} />

						<Button
							text='throw error'
							onClick={this.handleErrorButtonClick}
							className={style.errorButton}
						/>
					</div>

					<div className={style.appContent}>{appContent}</div>
				</div>
			</main>
		);
	}
}
