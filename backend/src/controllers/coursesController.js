const { default: mongoose } = require('mongoose');
const Course = require('../models/course')
const { UserCourse, courseStatus } = require('../models/user_course')
const Question = require('../models/question');

const getAllCourses = async (req, res) => {

    try {
        const courses = await Course.find(); 
        res.json(courses);
    } catch (err) {
        console.error("Error fetching courses:", err);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const getUserCourses = async (req, res) => {
    try {
        const { userId } = req.body;
        console.log('getting courses of this user: ', userId);

        const userCourses = await UserCourse.find({ userId: userId }).populate('courseId');
        const courses = userCourses.map(userCourse => ({
            course: userCourse.courseId,
            status: userCourse.courseStatus
        }))
        
        res.json(courses)
    } catch (e) {
        console.error("Error fetching user courses:", e);
        res.status(500).json({ error: "Internal Server Error" });
    }

}

const startCourseForUser = async (req, res) => {
    try {
        const { userId, courseId } = req.body;

        const exists = await UserCourse.findOne({
            userId: new mongoose.Types.ObjectId(userId),
            courseId: new mongoose.Types.ObjectId(courseId),
            courseStatus: courseStatus.IN_PROGRESS
        })

        if (!exists) {
            const newUserCourse = new UserCourse({
                userId: new mongoose.Types.ObjectId(userId),
                courseId: new mongoose.Types.ObjectId(courseId),
                courseStatus: courseStatus.IN_PROGRESS
            })
            await newUserCourse.save();
            console.log('course started successfully')
            res.status(200).json({message:"Course started successfully"})
        } else {
            console.log('course already started')
            res.status(200).json({message: "Course already started."})
        }

    } catch (e) {
        console.error("Error adding course to the user:", e);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const getCourseQuestions = async(req, res) => {
    try {
        const { courseId } = req.body;
        console.log('getting questionsfor this course: ', courseId);

        const questions = await Question.find({ courseId: courseId });
        console.log('questions:', questions)
        res.json(questions)
    } catch (e) {
        console.error("Error fetching user courses:", e);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

const completeCourse = async (req, res) => {
    try {
        const { userId, courseId } = req.body;

        const userCourse = await UserCourse.findOne({
            userId: new mongoose.Types.ObjectId(userId),
            courseId: new mongoose.Types.ObjectId(courseId),
            courseStatus: courseStatus.IN_PROGRESS
        })

        if (userCourse) {
            userCourse.courseStatus = courseStatus.COMPLETED;
            await userCourse.save();
            console.log('course completed successfully')
            res.status(200).json({message:"Course completed successfully"})
        } else {
            console.log('Course not started or already completed.')
            res.status(200).json({message: "Course not started or already completed."})
        }

    } catch (e) {
        console.error("Error completing course:", e);
        res.status(500).json({ error: "Internal Server Error" });
    }

}


module.exports = { getAllCourses, getUserCourses, startCourseForUser, getCourseQuestions, completeCourse}