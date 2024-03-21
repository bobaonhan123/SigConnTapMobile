import axios from "axios";

const baseUrl = "http://192.168.1.5:8000";
export const http = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

const serverBaseUrl = "http://127.0.0.1:8000";
export const serverAxios = axios.create({
  baseURL: serverBaseUrl,
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "122342",
  },
});

export const imgBaseUrl = "http://localhost:8001";
export const httpFile = axios.create({
  baseURL: imgBaseUrl,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});