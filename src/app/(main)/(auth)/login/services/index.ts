import { httpPost } from "@/shared/services/http";

export async function postLogin(
    body: any,
    options = {}
): Promise<LoginResponse> {
    return httpPost("/login", body, {
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
    })
        .then(data => data as LoginResponse)
        .catch((error) => {
            console.error(error);
            throw error;
        });
}