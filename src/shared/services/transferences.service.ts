import { DepositType } from "@/types/transference.type";
import { httpPost } from "./http";

export async function postDeposits(id: number, body: any, options = {}): Promise<DepositType> {
    return httpPost(`/accounts/${id}/deposits`, body, {
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