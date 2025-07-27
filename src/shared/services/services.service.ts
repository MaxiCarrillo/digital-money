import { ServiceType } from "@/types";

export async function getService(): Promise<ServiceType[]> {
    return fetch(`https://digitalmoney.digitalhouse.com/service`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => {
            throw error;
        });
}

export async function getServiceById(id: string): Promise<ServiceType> {
    return fetch(`https://digitalmoney.digitalhouse.com/service/${id}`)
        .then((response) => response.json())
        .then((data) => data)
        .catch((error) => {
            throw error;
        });
}