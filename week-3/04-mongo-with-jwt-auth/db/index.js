const mongoose = require('mongoose');
require('dotenv').config();
const mongoUrl=process.env.mongoUrl;

// Connect to MongoDB
mongoose.connect(mongoUrl);

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    purchasedCourses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }],
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    id:Number,
    title:String,
    description:String,
    imageLink:String,
    price:Number,
    published:Boolean,
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}