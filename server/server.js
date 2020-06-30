const path = require('path')
const express = require('express')

const server = express()

server.use(express.json())
// we will need a route for our profiles
// server.use('/api/v1/profiles', tasks)
server.use(express.static(path.join(__dirname, './public')))

module.exports = server
