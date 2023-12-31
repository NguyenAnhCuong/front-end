import axios from "axios";
const axiosClient = axios.create({
  baseURL: "https://651f6b9944a3a8aa47699fb4.mockapi.io/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});
// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    console.log("request interceptor", config);
    //attach token to request if exitst
    const accessToken = localStorage.getItem("access_token");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log("request intetrceptor", response);
    return response.data;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log("axiClient-response error:", error.response);
    if (!error.response) throw new Error("Something wrong");
    if (error.response.status === 404) {
      //redirect to login
      //clear token,logout
      // window.location.assign("/login");
      return;
    }
    return Promise.reject(error);
  },
);

export default axiosClient;
