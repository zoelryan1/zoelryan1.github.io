// the function which handles the input field logic
function getInput() {
    var nameField = document.getElementById('textField).value;
    var result = document.getElementById('result');

// use an eventlistener for the event
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getInput, false);
