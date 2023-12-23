import axios from "axios";

console.log(process.env.NEXT_PUBLIC_SERVER_URL)
const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        withCredentials: true
    }
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {
    // Do something before request is sent
      const storageData:string|null = localStorage.getItem("persist:fb/user");
      if(storageData != null) {
        const jsonAccessToken = JSON.parse(storageData).token
        const accessToken = jsonAccessToken.slice(1, jsonAccessToken.length - 1)
        if (accessToken) {
          config.headers["Authorization"] = `Bearer ${accessToken}`;
        }
      }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response?.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return error?.response.data;
});

export default instance