const path = require('path')
const express = require('express')

const profiles = require('./routes/profiles')

const server = express()

server.use(express.json())
server.use('/api/v1/profiles', profiles)
server.use(express.static(path.join(__dirname, './public')))

module.exports = server
