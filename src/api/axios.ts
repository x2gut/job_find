import axios from "axios";
import useAuthStore from "../stores/authStore";

const axiosClient = axios.create({
  baseURL: "http://localhost:8000",
  timeout: 2500,
  withCredentials: true,
});

const refreshClient = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true,
});

axiosClient.interceptors.request.use(
  (request) => {
    const { accessToken } = useAuthStore.getState();
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }

    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 403 && !originalRequest._retry) {
      originalRequest._retry = true;
      const { setIsAuthenticated, setAccessToken } = useAuthStore.getState();
      try {
        const request = await refreshClient.post("user/refresh");
        if (request.status === 200) {
          setIsAuthenticated(true);
          setAccessToken(request.data["access_token"]);
        }
        return axiosClient(originalRequest);
      } catch (refreshError) {
        setIsAuthenticated(false)
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosClient;
