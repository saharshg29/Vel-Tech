const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const URI = require('./controller/KEYS')
const PORT = process.env.PORT || 5000;


// ----------------------- ROUTES -----------------------
const student = require('./controller/routes/student')
const teacher = require('./controller/routes/teacher')
const subject = require('./controller/routes/subject')


// ------------------------CONNECTION WITH MONGO DB 

const DB = URI.URI

mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(err => console.log(err))

app.use(cors())
app.use(express.json())

app.use('/student', student)
app.use('/teacher', teacher)
app.use('/subject', subject)


app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})