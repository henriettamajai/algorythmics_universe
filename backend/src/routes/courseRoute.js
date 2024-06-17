const express = require("express");
const { getAllCourses, getUserCourses, startCourseForUser, getCourseQuestions, completeCourse } = require("../controllers/coursesController");
const router = express.Router();

router.get('/api/getAllCourses', getAllCourses);
router.post('/api/getUserCourses', getUserCourses);
router.post('/api/startCourseForUser', startCourseForUser);
router.post('/api/getCourseQuestions', getCourseQuestions);
router.post('/api/completeCourse', completeCourse);

module.exports = router;
