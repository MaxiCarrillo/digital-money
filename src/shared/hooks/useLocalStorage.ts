import { useEffect, useState } from 'react';

type StorageValue = string | number | object | null;

export function useLocalStorage<T extends StorageValue>(
    key: string,
    initialValue: T
): [T, (value: T) => void, () => void] {
    // Estado para almacenar el valor
    const [storedValue, setStoredValue] = useState<T>(() => {
        if (typeof window === 'undefined') {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);
            if (item === null) {
                return initialValue;
            }

            // Intentar parsear como JSON
            const parsedItem = JSON.parse(item);
            return parsedItem;
        } catch (error) {
            console.error(`Error reading localStorage key "${key}":`, error);
            return initialValue;
        }
    });

    // Función para establecer el valor
    const setValue = (value: T) => {
        try {
            setStoredValue(value);

            if (typeof window !== 'undefined') {
                if (value === null || value === undefined) {
                    window.localStorage.removeItem(key);
                } else {
                    window.localStorage.setItem(key, JSON.stringify(value));
                }
            }
        } catch (error) {
            console.error(`Error setting localStorage key "${key}":`, error);
        }
    };

    // Función para remover el valor
    const removeValue = () => {
        try {
            setStoredValue(initialValue);
            if (typeof window !== 'undefined') {
                window.localStorage.removeItem(key);
            }
        } catch (error) {
            console.error(`Error removing localStorage key "${key}":`, error);
        }
    };

    // Escuchar cambios en localStorage de otras pestañas
    useEffect(() => {
        if (typeof window === 'undefined') return;

        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === key && e.newValue !== null) {
                try {
                    const newValue = JSON.parse(e.newValue);
                    setStoredValue(newValue);
                } catch (error) {
                    console.error(`Error parsing localStorage value for key "${key}":`, error);
                }
            } else if (e.key === key && e.newValue === null) {
                setStoredValue(initialValue);
            }
        };

        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, [key, initialValue]);

    return [storedValue, setValue, removeValue];
}