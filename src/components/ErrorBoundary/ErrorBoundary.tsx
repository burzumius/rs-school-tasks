import React, { Component, ErrorInfo } from 'react';

import style from './ErrorBoundary.module.scss';

import Button from '../Button/Button';

interface Props {
	children: React.ReactNode;
}

interface State {
	hasError: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = { hasError: false };
	}
	static getDerivedStateFromError() {
		return {
			hasError: true,
		};
	}
	componentDidCatch(error: Error, errorInfo: ErrorInfo) {
		console.error(
			'ErrorBoundary caught an error: ',
			error,
			errorInfo.componentStack
		);
	}

	render(): React.ReactNode {
		if (this.state.hasError) {
			return (
				<div className={style.container}>
					<h2 className={style.fallback}>Something went wrong.</h2>
					<Button
						text='reset'
						onClick={() => this.setState({ hasError: false })}
					/>
				</div>
			);
		}

		return this.props.children;
	}
}
