const mongoose = require("mongoose");
const passport = require("passport");

const UserSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String
});

module.exports = { UserSchema };