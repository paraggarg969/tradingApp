const mongoose = require('mongoose');

// Define the schema
const tradingSchema = new mongoose.Schema({
    bio: String,
    name: String,
    age: String,
    gender: String,
    Phoneno: String,
    Enrollment: String,
    department: String,
    Batch: String,
    Semester: String,
    school: {
        schoolname: String,
        percentage: String,
        city: String
    },
    city: String,
    Country: String,
    Hobby: String,
    achievement: String,
    ProfilePic: String
});

// Create the model
const user = mongoose.model('User', tradingSchema);
module.exports = user;
