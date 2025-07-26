import { formatCardNumber, formatCVC, formatExpirationDate } from "./cardsFormat";

// Manejar entrada de teclas para el número de tarjeta
export const handleNumberKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Permitir: backspace, delete, tab, escape, enter
    const allowedKeys = [
        'Backspace', 'Delete', 'Tab', 'Escape', 'Enter',
        'Home', 'End', 'ArrowLeft', 'ArrowRight'
    ];
    if (
        allowedKeys.includes(e.key) ||
        // Permitir: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
        ((e.ctrlKey || e.metaKey) && ['a', 'c', 'v', 'x', 'A', 'C', 'V', 'X'].includes(e.key))
    ) {
        return;
    }
    // Asegurar que solo sean números (0-9)
    if (!/^[0-9]$/.test(e.key)) {
        e.preventDefault();
    }
};

export function handleCardNumberChange(
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: (field: string, value: string) => void
) {
    const formatted = formatCardNumber(e.target.value);
    setValue('number_id', formatted);
}

// Manejar cambios en la fecha de expiración
export function handleExpirationDateChange(
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: (field: string, value: string) => void
) {
    const formatted = formatExpirationDate(e.target.value);
    setValue('expiration_date', formatted);
};

// Manejar cambios en el CVC
export function handleCVCChange(
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: (field: string, value: string) => void
) {
    const formatted = formatCVC(e.target.value);
    setValue('cod', formatted);
}