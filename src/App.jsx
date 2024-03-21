import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { BaseLayout } from './layout';
import { GuestReviewPage } from './pages';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route
					path="/"
					element={<div>Hello World!</div>}
				/> */}
				<Route
					path="/"
					element={
						<BaseLayout>
							<GuestReviewPage />
						</BaseLayout>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
