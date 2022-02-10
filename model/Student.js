const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const Teachers = require('./Teachers')
const Subject = require('./Subject')

const studentSchema = new mongoose.Schema({
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
    // Year of Enrollment
    YOE: {
        type: String,
        default: null
    },
    mentor:[ {
        type: ObjectId,
        ref: Teachers
    }],
    Subject: [
        {
            type: ObjectId,
            ref: Subject
        }
    ],
    Teachers: [
        {
            type: ObjectId,
            ref: Teachers,
        }
    ],
    Father: {
        type: String,
        default: null
    }
})

mongoose.model("Student", studentSchema)