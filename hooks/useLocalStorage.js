import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        try {
            if (typeof window !== 'undefined') {
                const value = window.localStorage.getItem(key);
                return value ? JSON.parse(value) : initialValue;
            }
        } catch (error) {
            console.error('Error reading localStorage:', error);
        }
        return initialValue;
    });

    const setValue = (value) => {
        try {
            if (typeof window !== 'undefined') {
                const valueToStore = value instanceof Function ? value(state) : value;
                if (valueToStore !== undefined && valueToStore !== null) {
                    window.localStorage.setItem(key, JSON.stringify(valueToStore));
                    setState(valueToStore);
                }
            }
        } catch (error) {
            console.error('Error writing to localStorage:', error);
        }
    };

    const removeItem = () => {
        try {
            if (typeof window !== 'undefined') {
                window.localStorage.removeItem(key);
                setState(null);
            }
        } catch (error) {
            console.error('Error deleting item from localStorage:', error);
        }
    };

    return [state, setValue, removeItem];
};

export default useLocalStorage;
