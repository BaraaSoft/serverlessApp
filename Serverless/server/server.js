const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

var express = require('express');

server.use('/hub', express.static("hub"));
server.use(middlewares)
server.use('/api', router)
server.listen(3001, () => {
    console.log('>> JSON Server is running...');
    console.log(">> " + server.path())
    //console.log("Path:")
    //console.log(__dirname)
})

// $ node server.js