const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Student = mongoose.model("Student")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

router.post('/signup', (req, res) => {
    const { name, email, password } = req.body
    if (!email || !password || !name) {
        return res.status(422).json({ error: "giving all the fiels is necessary" })
    }
    else {
        Student.findOne({ email: email })
            .then((savedStudent) => {
                if (savedStudent) {
                    return res.status(422).json({ error: 'Student already exist' })
                }
                else {
                    bcrypt.hash(password, 12)
                        .then(hashedPassword => {
                            const student = new Student({
                                email,
                                password: hashedPassword,
                                name
                            })
                            student.save()
                                .then(student => {
                                    res.status(200).json({ message: "Sign up sucessfull" })
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                        })
                }
            }).catch(err => {
                console.log(err)
            })
    }
})

router.post('/signin', (req, res) => {
    const { email, password } = req.body
    console.log("log in deails", req.body)
    if (!email || !password) {
        console.log('email', email)
        return res.json({ error: "email or password is wrong" })
    }

    Student.findOne({ email: email })
        .then(savedStudent => {
            if (!savedStudent) {
                res.status(400).json({ err: "Student does not exist" })
            }
            bcrypt.compare(password, savedStudent.password)
                .then(doMatch => {
                    if (doMatch) {
                        const token = jwt.sign({ _id: savedStudent._id }, 'JWT_TOKEN')
                        const { _id, name, email, followers, following } = savedStudent
                        res.json({ token, student: { _id, name, email } })
                    }
                    else {
                        return res.status(422).json({ error: "Invalid Email or passwoord" })
                    }
                })
        })
        .catch(err => {
            console.log(err)
        })
})

module.exports = router
