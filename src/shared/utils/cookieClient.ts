interface Cookie {
    name: string;
    value: string;
    hours?: number;
}

export const setCookie = ({ name, value, hours }: Cookie) => {
    if (typeof window === 'undefined') return;

    const expires = new Date(Date.now() + (hours || 1) * 1000 * 60 * 60);
    document.cookie = `${name}=${encodeURIComponent(value)}; path=/; expires=${expires.toUTCString()}`;
}

export const getCookie = (name: string): string | undefined => {
    if (typeof window === 'undefined') return undefined;

    const nameEQ = name + "=";
    const cookiesArray = document.cookie.split(';');

    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
            return decodeURIComponent(cookie.substring(nameEQ.length, cookie.length));
        }
    }
    return undefined;
}

export const deleteCookie = (name: string) => {
    if (typeof window === 'undefined') return;

    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
}

export const getAllCookies = (): Record<string, string> => {
    if (typeof window === 'undefined') return {};

    const cookies: Record<string, string> = {};
    const cookiesArray = document.cookie.split(';');

    for (let i = 0; i < cookiesArray.length; i++) {
        let cookie = cookiesArray[i].trim();
        const [name, ...valueParts] = cookie.split('=');
        if (name && valueParts.length > 0) {
            cookies[name] = decodeURIComponent(valueParts.join('='));
        }
    }

    return cookies;
}