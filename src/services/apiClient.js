import axios from "axios";
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005",
});

// Automatically set JWT token on the request headers for every request
apiClient.interceptors.request.use((config) => {
  // Retrieve the JWT token from the local storage
  const storedToken = localStorage.getItem("authToken");

  if (storedToken) {
    config.headers = { Authorization: `Bearer ${storedToken}` };
  }

  return config;
});

export default apiClient;
