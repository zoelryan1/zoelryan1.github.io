// use an eventlistener for the event
var subButton = document.getElementById('subButton');
subButton.addEventListener('click', getInput, false);

// the function which handles the input field logic
function getInput() {
    var nameField = document.getElementById('textField).value;
    var result = document.getElementById('result');

function WriteToFile(passForm) {
    set fso = CreateObject("Scripting.FileSystemObject"); 
    set s = fso.CreateTextFile("/home/zoe/Desktop/test.txt", True);
    s.writeline(result);
    s.Close();
 }

