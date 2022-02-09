const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000;

app.use(cors())

const DB = 'mongodb+srv://VelTech:Saharsh%402004@uni.8hdh8.mongodb.net/myFirstDVelTechatabase?retryWrites=true&w=majority'

app.get('/', (req, res) => {
    res.send('Working properly')
})

mongoose.connect(DB)
    .then(() => {
        console.log('Connected to MongoDB')
    })
    .catch(err => console.log(err))

app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})