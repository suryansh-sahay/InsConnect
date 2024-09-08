import axios from "axios";

export async function fetchPosts() {
  try {
    const response = await axios.get('http://localhost:4000/post');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}