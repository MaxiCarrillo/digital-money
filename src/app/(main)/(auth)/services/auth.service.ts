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