require('dotenv').config()
const express = require('express')
const path = require('path')
const cors = require('cors')
const mongoose = require('mongoose')

const app = express()

app.use(express.json({ extended: false }))
// app.use(cors())

mongoose.connect(process.env.MONGO_DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err))

app.use(express.static(path.join(__dirname, "dist")))
app.use("/api/toDoList", require('./routes/api/toDoList'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is listening on Port ${PORT}`))