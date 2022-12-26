import { API_URL } from "constants/api";
import axios from "axios";
import { getToken } from "utils/authStore";
import errorHandler from "./requestErrorHandler";

const request = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

request.interceptors.request.use(
  (req) => {
    const token = getToken();

    if (token) {
      // @ts-ignore
      req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
  },
  (error) => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    // message.error("Error occurred");
    // TODO: Add handler here to handle error in a separated file
    // 401 | 403: Redirect to logout
    // 400 | 404 | 500: Display message
    const { data, status } = error.response || {};
    errorHandler(status, data?.error);

    return Promise.reject(error);
  },
);

export default request;
