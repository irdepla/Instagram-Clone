import { apiClient } from "../config/api.config";
import { LoginBody, RegisterBody } from "../interfaces/AuthInterface";

export async function register(body: RegisterBody){
    console.log("user registering", body);
    const res = await apiClient.post("/auth/register", body)
    return res.data
}

export function login(body: LoginBody){
    console.log("user entered", body);
        return apiClient.post("/auth/login", body)
}