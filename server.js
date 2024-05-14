'use strict'

const bodyParser = require('body-parser')
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const app = express()

require('dotenv').config()

const PORT = process.env.PORT

//body-parser
app.use(bodyParser.json())

//routes
app.use(routes)

//mongoose connectivity
// mongoose.connect()

app.listen(PORT)
console.log(`app started locally on PORT ${PORT}`)

module.exports = app


