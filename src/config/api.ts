import axios from "axios";

export const BASE_URL_API = process.env.BASE_URL_API || "http://localhost";

export const axiosInstance = axios.create({
  baseURL: `${BASE_URL_API}/api/v1`,
});
