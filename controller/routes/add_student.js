const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Student = mongoose.model("Student")


router.post('/add-student', (req, res) => {
    const { name, email, password, YOE, mentor, Subject, Teachers } = req.body
    if (!name || !email || !password || !YOE || !mentor || !Subject || !Teachers) {
        return res.status(422).json({ error: "Giving all the fields is necesssary" })
    }

    const student = new Student({
        name,
        email,
        password,
        YOE,
        mentor,
        Subject,
        Teachers
    })
    student.save()
        .then(result => {
            res.status(200).json({ result: `Following studnet had been added sucessfully ${result}` })
        })
        .catch(error => {
            console.log(error._message)
        })
})