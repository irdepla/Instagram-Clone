import { apiClient } from "../config/api.config";

export async function getHomePosts(page = 1, limit = 10) {
    const res = await apiClient.get(`posts/home?page=${page}&limit=${limit}`);
    console.log(res);
    return res.data;
}
