import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

export function usePathnameToArray() {
	const { pathname } = useLocation();
	const [pathnameParts, setPathnameParts] = useState([]);

	useEffect(() => {
		const parts = pathname.split('/').map((part) => part || 'dashboard');
		setPathnameParts(parts);
	}, [pathname]);

	return pathnameParts;
}
