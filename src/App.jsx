import { Route, Routes, useLocation } from 'react-router-dom';
import { ROUTES } from './routes';
import { useEffect } from 'react';

const INITIAL_TITLE = 'GuestPro';

function App() {
	const location = useLocation();

	useEffect(() => {
		const title = ROUTES.find((route) => route.path === location.pathname)?.title;

		document.title = title || INITIAL_TITLE;
		return () => {
			document.title = INITIAL_TITLE;
		};
	}, [location]);

	return (
		<Routes>
			{ROUTES.map((route, index) => (
				<Route
					key={index}
					path={route.path}
					element={route.element}
				/>
			))}
		</Routes>
	);
}

export default App;
