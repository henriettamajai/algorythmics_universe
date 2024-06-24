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
  async getUserCourses(userId) {
    try {
      const response = await apiClient.post('getUserCourses',
        { userId },
        { responseType: 'json' });
      return response.data;
    } catch (e) {
      console.error('Error fetching user courses. ', e);
    }
  },
  async startCourseForUser(courseId, userId) {

    console.log('starting course for user')
    try {
      const response = await apiClient.post('startCourseForUser',
        { userId, courseId },
        { responseType: 'json' }
      );
    } catch (e) {
      console.error('Error starting course for user. ', e);
    }

  },
  async changePassword(currentPassword, newPassword) {
    const userId = localStorage.getItem('_id');
    try {
      const response = await apiClient.post('/change-password', {
        userId,
        currentPassword,
        newPassword
      });
      return response.data;
    } catch (e) {
      console.error('Error changing password:', e);
      throw e;
    }
  },
  async getCourseQuestions(courseId) {
    try {
      const response = await apiClient.post('getCourseQuestions',
        { courseId },
        { responseType: 'json' }
      );
      return response.data
    } catch (e) {
      console.error('Error fetching questions for course with id: ', courseId);
    }
  },
  async completeCourse(courseId, userId) {
    try {
      const response = await apiClient.post('completeCourse', { userId, courseId });
      const { message, isAccessible } = response.data;
  
      // Itt kezeld az isAccessible értékét, például frissítsd a felhasználói felületet vagy a szükséges logikát
      console.log(message);
      console.log('isAccessible:', isAccessible);
  
      return { message, isAccessible };
    } catch (e) {
      console.error('Error completing course:', e);
      throw e;
    }
  },
  
  async getUserScore(userId) {
    try {
      const response = await apiClient.post('getUserScore',
        { userId },
        { responseType: 'json' }
      );
      return response.data;
    } catch (e) {
    }
  },
  async addUserScore(userId, score) {
    try {
      const response = await apiClient.post('addUserScore',
        { userId, score },
        { responseType: 'json' }
      );
      return response.data;
    } catch (e) {
      console.error('Error getting user score. ', e);
    }
  }, 
  async listAllScores() {
    console.log('listing all scores');
    try {
      const response = await apiClient.get('listAllScores');
      return response.data;
    } catch (e) {
      console.error('Error listing all scores.', e);
    }
  },
}

