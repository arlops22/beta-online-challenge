import axios from "axios";

export const api = axios.create({
    baseURL: process.env.NEXT_APP_BASE_URL
});