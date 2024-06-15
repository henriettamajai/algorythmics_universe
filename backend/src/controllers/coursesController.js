const Course = require('../models/course')

const getAllCourses = async (req, res) => {

    try {
        const courses = await Course.find(); 
        res.json(courses);
    } catch (err) {
        console.error("Error fetching courses:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

// const getUserCourses = async (req, res) => {
//     console.log('test')
// }

module.exports = { getAllCourses }