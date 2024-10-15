import axios from "axios";
import axiosInstance from "./axiosInstance";

export const createPost = async (data) => {
  try {
    const response = await axiosInstance.post(`/post`, data);
    return response.data;
  } catch (error) {
    console.error("Error creating post:", error);
    throw error;
  }
};

export const getPosts = async () => {
  try {
    const response = await axiosInstance.get(`${API_URL}/post`);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
