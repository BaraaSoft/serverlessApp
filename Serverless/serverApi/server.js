'use strict';
var port = process.env.PORT || 3001;

const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
var express = require('express');

server.use('/hub', express.static("hub"));
server.use(middlewares);
server.use('/api', router);
server.listen(port, () => {
    console.log('>> JSON Server is running...');
    console.log(">> " + server.path());
    //console.log("Path:")
    //console.log(__dirname)
});



//http.createServer(function (req, res) {
//    res.writeHead(200, { 'Content-Type': 'text/plain' });
//    res.end('Hello World\n');
//}).listen(port);
