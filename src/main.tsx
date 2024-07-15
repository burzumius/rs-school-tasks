import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import { loader as itemLoader } from './helpers/loaders.ts';

import App from './App.tsx';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.tsx';
import NotFound from './components/NotFound/NotFound.tsx';
import Detailed from './components/Detailed/Detailed.tsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <NotFound />,
		children: [
			{
				path: 'items/:itemId',
				element: <Detailed />,
				loader: itemLoader,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
	<ErrorBoundary>
		<RouterProvider router={router} />
	</ErrorBoundary>
);
