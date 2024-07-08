import { Component } from 'react';
import style from './App.module.scss';
import SearchBar from './components/SearchBar/SearchBar';
import ItemList from './components/ItemList/ItemList';
import { IAstroObject } from './helpers/types';
import { fetchItems } from './services/serverAPI';
import Loader from './components/Loader/Loader';
import Button from './components/Button/Button';

interface IAppState {
	items: IAstroObject[];
	isLoading: boolean;
	searchQuery: string;
	throwError: boolean;
}

export default class App extends Component {
	state: IAppState = {
		items: [],
		isLoading: false,
		searchQuery: '',
		throwError: false,
	};

	handleErrorButtonClick = () => {
		this.setState({ throwError: !this.state.throwError });
	};

	handleSearch = (searchQuery: string) => {
		this.setState({ isLoading: true });

		fetchItems().then((data = []) => {
			const searchResults = data.filter(
				(item) =>
					item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
					item.location.name.toLowerCase().includes(searchQuery.toLowerCase())
			);

			this.setState({
				items: searchResults?.length ? searchResults : data,
				isLoading: false,
			});
		});
	};

	componentDidMount(): void {
		this.setState({ isLoading: true });

		fetchItems().then((data) => {
			this.setState({
				items: data,
				isLoading: false,
			});
		});
	}

	render() {
		if (this.state.throwError) {
			throw new Error('Test error');
		}

		const { items, isLoading } = this.state;
		return (
			<main className={style.appContainer}>
				<div className={style.wrapper}>
					<div className={style.topSection}>
						<SearchBar handleSearch={this.handleSearch} />

						<Button
							text='throw error'
							onClick={this.handleErrorButtonClick}
							className={style.errorButton}
						/>
					</div>

					<div className={style.appContent}>
						{isLoading ? <Loader /> : <ItemList items={items} />}
					</div>
				</div>
			</main>
		);
	}
}
