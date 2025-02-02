import { apiClient } from "../config/api.config";
import { LoginBody, RegisterBody } from "../interfaces/AuthInterface";

export async function register1(body: RegisterBody) {
  console.log("user registering", body);
  const res = await apiClient.post("/auth/register", body);
  return res.data;
}

export async function login1(body: LoginBody) {
  console.log("user entered", body);
  const res = await apiClient.post("/auth/login", body);
  console.log("1 response is", res.data);

  return res.data;
}
