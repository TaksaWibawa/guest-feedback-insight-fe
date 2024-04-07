import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ROUTES_LIST, RouteBase } from './routes';

const INITIAL_TITLE = 'GuestPro';

function App() {
	const location = useLocation();

	useEffect(() => {
		const title = ROUTES_LIST.find((route) => route.path === location.pathname)?.title;

		document.title = title || INITIAL_TITLE;
		return () => {
			document.title = INITIAL_TITLE;
		};
	}, [location]);

	return <RouteBase />;
}

export default App;
