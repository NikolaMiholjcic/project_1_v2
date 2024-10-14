import axios from "axios";

const apiClient = axios.create({
  baseURL: "localhost",
  timeout: 1000,
  headers: { Authorization: "Bearer yourtokenhere" },
});

export const fetchData = async (route) => {
  try {
    const response = await apiClient.get(route);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
