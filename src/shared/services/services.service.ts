import { ServiceType } from "@/types";

const API_URL = process.env.NEXT_PUBLIC_URL || '';


export async function getService(): Promise<ServiceType[]> {
    return fetch(`${API_URL}/service`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => {
            throw error;
        });
}

export async function getServiceById(id: string): Promise<ServiceType> {
    return fetch(`${API_URL}/service/${id}`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => {
            throw error;
        });
}