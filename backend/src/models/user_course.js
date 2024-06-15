const mongoose = require("mongoose")

const courseStatus = Object.freeze({
    IN_PROGRESS: "inProgress",
    COMPLETED: "completed",
    FAVORITE: "favorite",
    NOT_STARTED: "notStarted",
})

const userCourseSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'users', required: true },
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'courses', required: true },
    courseStatus: { type: String, enum: Object.values(courseStatus), default: courseStatus.NOT_STARTED }
});
userCourseSchema.static.courseStatus = courseStatus;

module.exports = { courseStatus }
const UserCourse =  mongoose.model('UserCourse', userCourseSchema)
module.exports.UserCourse = UserCourse