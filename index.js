const express = require('express');
const app = express();
const http = require('http');
const port = 3000;
const server = http.createServer(app); // initialize app to supply to HTTP server
const { Server } = require('socket.io');
const io = new Server(server);

// define router handler
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// make server to listen 3000 port
server.listen(port, () => {
    console.log(`listening on: http://localhost:${port}\n`);
});
