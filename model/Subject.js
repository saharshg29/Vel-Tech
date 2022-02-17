const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types
const Teachers = require('./Teachers')

const subjectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    courseCode: {
        type: String,
        required: true
    },
    Teachers: [
        {
            type: ObjectId,
            ref: Teachers
        }
    ]
})

mongoose.model("Subject", subjectSchema)