// core nodejs require
const express = require("express")
const path =require('path')
require('dotenv').config()
const http = require('http')
const url = require('url')

// import socket configure function
const configureWebSocket = require('./socket/index')

//app require
const multiplayerRoute = require("./routes/http.route/multiplayerRoute")
const homepage = require("./routes/http.route/homepage")
// PORT 
const PORT = process.env.PORT || 3000

const app = express()
// const expressWs = require("express-ws")(app)

app.set('view engine', 'ejs')

app.use(express.static(path.resolve(__dirname , 'public')))
app.use(express.json())

app.use('/',homepage)
app.use('/multiplayer',multiplayerRoute)


// WebSocket server



configureWebSocket(app.listen(PORT , () =>{
    console.log(`Server listening in the port: ${PORT}`)
}))


