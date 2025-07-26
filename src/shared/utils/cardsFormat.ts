// Función para formatear el número de tarjeta
export const formatCardNumber = (value: string) => {
    // Eliminar todos los espacios y caracteres no numéricos
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    // Limitar a 16 dígitos
    const truncated = v.substring(0, 16);
    // Formatear en grupos de 4
    const formatted = truncated.replace(/(.{4})/g, '$1 ').trim();
    return formatted;
};

// Función para formatear la fecha de expiración
export const formatExpirationDate = (value: string) => {
    // Eliminar todos los caracteres no numéricos
    const v = value.replace(/\D/g, '');
    // Limitar a 6 dígitos (MMYYYY)
    const truncated = v.substring(0, 6);
    // Formatear como MM/YYYY
    if (truncated.length >= 2) {
        return truncated.substring(0, 2) + '/' + truncated.substring(2);
    }
    return truncated;
};

// Función para formatear el CVC
export const formatCVC = (value: string) => {
    // Eliminar todos los caracteres no numéricos
    const v = value.replace(/[^0-9]/gi, '');
    // Limitar a 4 dígitos máximo
    return v.substring(0, 4);
};