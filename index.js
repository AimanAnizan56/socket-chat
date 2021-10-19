const express = require('express');
const app = express();
const http = require('http');
const port = 3000;
const server = http.createServer(app); // initialize app to supply to HTTP server
const { Server } = require('socket.io'); // initialize instance of `socket.io`
const io = new Server(server);

// define router handler
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// listen to incoming connection event
io.on('connection', (socket) => {
    console.log('A user connected');

    // receive message
    socket.on('chat message', (msg) => {
        console.log(`message: ${msg}`);
        // send chat message to all of connected user
        io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

// make HTTP server listen to 3000 port
server.listen(port, () => {
    console.log(`listening on: http://localhost:${port}\n`);
});
