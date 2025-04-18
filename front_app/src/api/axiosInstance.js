import axios from 'axios'

const baseURL = process.env.REACT_APP_BASE_URL
export const axiosInstance = axios.create({
    baseURL,
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('userToken') || ''
    }
})


axiosInstance.interceptors.request.use(
  (config) => {
      config.headers["Authorization"] = localStorage.getItem('userToken') || "";

      return config;
  },
  (error) => {
      Promise.reject(error);
  }
);