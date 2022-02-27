const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema ({
    username: {type: String, required: true, unique: true} ,
    email: String,
    password: String
})

const User = mongoose.model("user", userSchema)

module.exports = User