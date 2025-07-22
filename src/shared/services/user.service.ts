import { User } from "@/types";
import { httpGetRevalidate } from "./http";

export async function getUserInfo(id: number, token: string, revalidateTag = "", options = {}): Promise<User> {
    return httpGetRevalidate(`/users/${id}`, token, revalidateTag, {
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