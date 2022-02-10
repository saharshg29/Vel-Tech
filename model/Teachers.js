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
    DOB: {
        type: Date,
        required: true,
    },
    ScholarNumber: {
        type: String,
        required: true,
    },
    // mentor: {
    //     type: ObjectId,
    //     ref: Teachers
    // }
})

mongoose.model("Teachers", TeachersSchema)