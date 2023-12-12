const mongoose = require("mongoose")
const Schema = mongoose.Schema
// const express = require("express")
const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required: true
    },
    role:{
        type: String
    }
})
module.exports = mongoose.model('users', userSchema)
