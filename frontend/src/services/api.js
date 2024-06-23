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
    console.log('getUserCourses')
    try {
      console.log('user to get courses for: ', userId)
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
    const userId = localStorage.getItem('_id'); // A userId lekérése a localStorage-ból
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
    console.log('getting questions for course with id: ', courseId);
    try {
      const response = await apiClient.post('getCourseQuestions',
        { courseId },
        { responseType: 'json' }
      );
      console.log('questions: ', response.data)
      return response.data
    } catch (e) {
      console.error('Error fetching questions for course with id: ', courseId);
    }
  },
  async completeCourse(courseId, userId) {
    console.log('completing course')
    try {
      const response = await apiClient.post('completeCourse',
        { userId, courseId },
        { responseType: 'json' }
      );
    } catch (e) {
      console.error('Error completing course. ', e);
    }
  },
  async getUserScore(userId) {
    console.log('getting user score')
    try {
      const response = await apiClient.post('getUserScore',
        { userId },
        { responseType: 'json' }
      );
      return response.data;
    } catch (e) {
      console.error('Error getting user score. ', e);
    }
  },
  async addUserScore(userId, score) {
    console.log('setting user score', userId, score)
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

