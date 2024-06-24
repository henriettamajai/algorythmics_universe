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

        const userCourse = await UserCourse.findOne({
            userId: new mongoose.Types.ObjectId(userId),
            courseId: new mongoose.Types.ObjectId(courseId),
            //courseStatus: courseStatus.IN_PROGRESS
        })

        if (!userCourse) {
            const newUserCourse = new UserCourse({
                userId: new mongoose.Types.ObjectId(userId),
                courseId: new mongoose.Types.ObjectId(courseId),
                courseStatus: courseStatus.IN_PROGRESS
            })
            await newUserCourse.save();
            console.log('course started successfully')
            res.status(200).json({message:"Course started successfully"})
        } else {
            userCourse.courseStatus = courseStatus.IN_PROGRESS;
            userCourse.save();
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
}; 
const completeCourse = async (req, res) => {
    try {
        const { courseId, userId } = req.body;
        console.log(courseId, userId);

        
        const userCourse = await UserCourse.findOne({
            userId: new mongoose.Types.ObjectId(userId),
            courseId: new mongoose.Types.ObjectId(courseId),
        });

        if (!userCourse) {
            return res.status(404).json({ message: "User course not found." });
        }

        if (userCourse.courseStatus === courseStatus.IN_PROGRESS) {
            userCourse.courseStatus = courseStatus.COMPLETED;

            await userCourse.save();
            console.log('Course completed successfully');
            const course = await Course.findByIdAndUpdate(courseId, { isAccessible: true }, { new: true });
            if (!course) {
                return res.status(404).json({ message: "Course not found." });
            }

            const nextCourseNumber = course.number + 1;
            let nextUserCourse = await UserCourse.findOneAndUpdate(
                {
                    userId: new mongoose.Types.ObjectId(userId),
                    number: nextCourseNumber
                },
                {
                    $setOnInsert: {
                        courseId: new mongoose.Types.ObjectId(), 
                        courseStatus: courseStatus.NOT_STARTED,
                        isAccessible: true
                    }
                },
                { new: true, upsert: true, setDefaultsOnInsert: true }
            );

            if (!nextUserCourse) {
                console.log('Next course added successfully');
            } else {
                console.log('Next course updated successfully');
            }

            res.status(200).json({ message: "Course completed successfully", isAccessible: true });
        } else {
            console.log('Course not started or already completed.');
            res.status(200).json({ message: "Course not started or already completed.", isAccessible: true });
        }
    } catch (error) {
        console.error("Error completing course:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const markCourseAsFavorite = async (req, res) => {
    try {
        const { userId, courseId } = req.body;

        const userCourse = await UserCourse.markAsFavorite(userId, courseId);

        if (!userCourse) {
            res.status(404).json({ error: "UserCourse not found" });
            return;
        }

        res.status(200).json({ message: "Course marked as favorite", isFavorite: true });
    } catch (error) {
        console.error("Error marking course as favorite:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const removeCourseFromFavorites = async (req, res) => {
    try {
        const { userId, courseId } = req.body;

        const userCourse = await UserCourse.removeFavorite(userId, courseId);

        if (!userCourse) {
            res.status(404).json({ error: "UserCourse not found" });
            return;
        }

        res.status(200).json({ message: "Course removed from favorites", isFavorite: false });
    } catch (error) {
        console.error("Error removing course from favorites:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};


module.exports = { getAllCourses, getUserCourses, startCourseForUser, getCourseQuestions, completeCourse
    , markCourseAsFavorite, removeCourseFromFavorites
}