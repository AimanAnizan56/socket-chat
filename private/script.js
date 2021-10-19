var socket = io();
var form = document.getElementById('form');
var input = document.getElementById('input');
var messages = document.getElementById('messages');

// add event listener for form
form.addEventListener('submit', function (e) {
    // prevent default event -- reload the browser
    e.preventDefault();
    // check if input is not empty
    if (input.value) {
        // sent message to server
        socket.emit('chat message', input.value);
        input.value = ''; // clear input box
    }
});

// receive message from server (sended by another user)
socket.on('chat message', function (msg) {
    var item = document.createElement('li'); // create new list element
    item.textContent = msg; // add `msg` to list
    messages.appendChild(item); // append list to parent `ul`
    window.scrollTo(0, document.body.scrollHeight); // scroll to the bottom
});
