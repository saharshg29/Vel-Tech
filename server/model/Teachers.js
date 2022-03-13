const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const Subject = require('./Subject')

const TeachersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    department: [{
        type: ObjectId,
        ref: Subject
    }],
    designation: {
        type: String,
        required: true,
        default: null
    }
})

const teacherModel = mongoose.model("Teacher", TeachersSchema) 

exports.Teacher = teacherModel