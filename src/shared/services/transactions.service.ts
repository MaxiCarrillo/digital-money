import { TransactionType } from "@/types";
import { httpGet } from "./http";

export async function getActivity(id: number, token: string, options = {}): Promise<TransactionType[]> {
    return httpGet(`/accounts/${id}/activity`, token, {
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
    })
        .then((data) => data as any)
        .catch((error) => {
            console.error(error);
            throw error;
        });
}