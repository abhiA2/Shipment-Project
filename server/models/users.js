const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name: String,
    email: String,
    password: String,
    confirmPassword: String
})
mongoose.model("UserInfo", userSchema)
