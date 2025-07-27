export const getServiceIcon = (serviceName: string): string => {
    const serviceMap: Record<string, string> = {
        'Netflix': 'netflix.svg',
        'Amazon Prime Video': 'prime.svg',
        'Funimation': 'funimation.svg',
        'Peacock': 'peacock.svg',
        'Paramount+': 'paramount.svg',
        'Mubi': 'mubi.svg',
        'Crunchyroll': 'crunchyroll.svg',
        'Discovery+': 'discovery.svg',
        'Hulu': 'hulu.svg',
        'Apple TV+': 'appletv.svg',
        'Disney+': 'disney.svg',
        'HBO Max': 'hbomax.svg'
    };

    return serviceMap[serviceName] || 'netflix.svg'; // fallback a netflix.svg
};