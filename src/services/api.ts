import axios from "axios";

export const Api = axios.create({
    baseURL: "https://smartfood-back-production.up.railway.app/"
})