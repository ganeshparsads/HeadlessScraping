const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    username: String,
    email: String,
    deactivated: Date
});
