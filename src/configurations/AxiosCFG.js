import axios from "axios";

export const baseUrl = "http://192.168.1.2:8000";
export const http = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

export const imgBaseUrl = "http://192.168.1.2:8001";
export const httpFile = axios.create({
  baseURL: imgBaseUrl,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});