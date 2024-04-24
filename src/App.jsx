import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ROUTES_LIST, RouteBase } from './routes';
import { globalRoute } from './utils';
import { ToastResponse } from './components/ui';

const INITIAL_TITLE = 'GuestPro';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  globalRoute.navigate = navigate;

  useEffect(() => {
    const title = ROUTES_LIST.find((route) => route.path === location.pathname)?.title;

    document.title = title || INITIAL_TITLE;
    return () => {
      document.title = INITIAL_TITLE;
    };
  }, [location]);

  return (
    <>
      <RouteBase />
      <ToastResponse />
    </>
  );
}

export default App;
