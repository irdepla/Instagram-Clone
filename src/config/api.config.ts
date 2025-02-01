import axios from "axios";
import { API_BASE_URL } from "./env.config";

export const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
    }
})

