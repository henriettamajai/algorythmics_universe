const express = require("express");
const { getAllCourses } = require("../controllers/coursesController");
const router = express.Router();

router.get('/api/getAllCourses', getAllCourses);
// router.get('/api/getUserCourses', getUserCourses);

module.exports = router;
