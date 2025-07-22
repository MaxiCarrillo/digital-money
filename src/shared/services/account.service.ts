import { AccountType } from "@/types";
import { httpGet } from "./http";

export async function getAcountInfo(token: string, options = {}): Promise<AccountType> {
    return httpGet('/account', token, {
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
