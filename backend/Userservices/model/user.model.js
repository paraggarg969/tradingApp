const mongoose = require('../conn').mongoose;
const db = require('../conn').db;

// Define the schema
const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        minlen: 4
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now()
    }
});

// Create the model
const user = mongoose.model('User', UserSchema);
module.exports = user;
