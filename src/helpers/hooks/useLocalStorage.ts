import { useState, useEffect } from 'react';

const useLocalStorage = (key: string, defaultValue: string = '') => {
	const [value, setValue] = useState(() => {
		try {
			return JSON.parse(localStorage.getItem(key) || defaultValue);
		} catch (error) {
			return defaultValue;
		}
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value !== undefined ? value : ''));
	}, [value, key]);

	return [value, setValue];
};

export default useLocalStorage;
