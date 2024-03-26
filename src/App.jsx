import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ROUTES } from './routes';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{ROUTES.map((route, index) => (
					<Route
						key={index}
						path={route.path}
						element={route.element}
					/>
				))}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
