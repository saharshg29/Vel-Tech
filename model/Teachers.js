const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema.Types


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
    Department: [{
        type: String,
        required: true
    }],
    Designation: [{
        type: String,
        required: true
    }]
})

mongoose.model("Teachers", TeachersSchema)
