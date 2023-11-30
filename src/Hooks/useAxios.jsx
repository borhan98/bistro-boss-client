import axios from "axios";
import useAuth from "./useAuth";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});

const useAxios = () => {
  const { logoutUser } = useAuth();
  // Check authorization before request
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("access-token");
      config.headers.authorization = `Bearer ${token}`;
      return config;
    },
    (err) => {
      return Promise.reject(err);
    }
  );

  // Check response after request
  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    (err) => {
      const status = err.response.status;
      if (status === 401 || status === 403) {
        logoutUser()
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
      }
    }
  );

  return axiosInstance;
};

export default useAxios;
