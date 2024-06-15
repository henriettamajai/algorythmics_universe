import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:3000/api',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  async getAllCourses() {
    try {
      const response = await apiClient.get(`getAllCourses`);
      return response.data;
    } catch (e) {
      console.error('Error fetching courses:', e);
    }
  },
  async getUserCourses() {

  }
}

