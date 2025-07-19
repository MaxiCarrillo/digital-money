import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("Token not found in localStorage");

    } catch (error) {

    }
}   