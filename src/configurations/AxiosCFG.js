import axios from "axios";

const baseUrl = "http://192.168.78.30:8000";
export const http = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const imgBaseUrl = "http://localhost:8001";
export const httpFile = axios.create({
  baseURL: imgBaseUrl,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});