# Simple Socket.IO Chat App :iphone:

This code is from [Socket.IO](https://socket.io/get-started/chat) tutorial with some amendment. :smile:

## How to execute :electric_plug:

1. Open terminal and install nodemon using `npm install nodemon`.
2. After install `nodemon`, use `npm run connect`.
3. Open URL `http://localhost:3000`.

## Editing :floppy_disk:

1. Use `npm install` to install the dependencies.
2. After editing code in private folder, use `npm run min` to minify the files.
3. `Nodemon` will automatically run the files again.

## Requirement :memo:

1. [NodeJS](https://nodejs.org/en/) with `NPM` : For managing packages.
2. [Nodemon](https://www.npmjs.com/package/nodemon) : Execute `index.js` automatically.
3. [Express](https://www.npmjs.com/package/express) : Provide `HTTP` server-side.
4. [Socket.IO](https://www.npmjs.com/package/socket.io) : Enable `real-time` bidirectional event-based communication.

## Homework :file_folder:

-   Broadcast a message to connected users when someone connects or disconnects.
-   Add support for nicknames.
-   Don’t send the same message to the user that sent it. Instead, append the message directly as soon as he/she presses enter.
-   Add “{user} is typing” functionality.
-   Show who’s online.
-   Add private messaging.
