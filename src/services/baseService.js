import axios from "axios";
import { BASE_URL, LOGIN_URL, REFRESH_TOKEN_URL } from "./api";
import { store } from "../store";
import { refreshToken } from "../features/user/userSlice";
import { redirect } from "react-router-dom";

axios.defaults.baseURL = BASE_URL;
axios.interceptors.request.use((req) => {
  if (req.url === REFRESH_TOKEN_URL) {
    const token = localStorage.getItem("REFRESH_TOKEN");
    req.headers.refreshToken = token;
  } else if (req.url !== LOGIN_URL) {
    const token = localStorage.getItem("ACCESS_TOKEN");
    req.headers.token = token;
  }
  console.log(req);
  return req;
});

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }

    const originalRequest = error.config;
    if (
      error.response.status === 403 &&
      originalRequest.url === REFRESH_TOKEN_URL
    ) {
      return Promise.reject(error);
    }

    if (!originalRequest._retry) {
      originalRequest._retry = true;
      try {
        await store.dispatch(refreshToken());
        const res = await axios.request(originalRequest);
        return Promise.resolve(res);
      } catch (e) {
        localStorage.removeItem("ACCESS_TOKEN");
      }
    }
    return Promise.reject(error);
  }
);

export default axios;
