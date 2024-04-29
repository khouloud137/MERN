import axios from "axios";

// Create an axios instance with the base URL of your API
const apiClient = axios.create({
  baseURL: "http://localhost:8000", // Set your base URL here
});

// Add a request interceptor to include the token in every request
apiClient.interceptors.request.use(
  (config) => {
    // Retrieve the token from localStorage
    const token = localStorage.getItem("token");

    if (token) {
      // Add the token to the Authorization header
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

export default apiClient;
