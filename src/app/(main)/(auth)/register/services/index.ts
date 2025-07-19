import { httpPost } from "@/shared/services/http";

export async function postRegister(
    body: any,
    options = {}
): Promise<RegisterResponse> {
    return httpPost("/users", body, {
        headers: {
            "Content-Type": "application/json",
        },
        ...options,
    })
        .then(data => data as RegisterResponse)
        .catch((error) => {
            console.error(error);
            throw error;
        });
}