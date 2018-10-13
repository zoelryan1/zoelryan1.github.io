// the function which handles the input field logic
function getUserName() {
    var nameField = document.getElementById('nameField').value;
    var result = document.getElementById('result');
    
    if (nameField.length < 3) {
        result.textContent = 'Username must contain at least 3 characters';

// use an eventlistener for the event
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getUserName, false);
