// the function which handles the input field logic
function getInput() {
    var nameField = document.getElementById('nameField').value;
    //var result = document.getElementById('result');
    set fso = CreateObject("Scripting.FileSystemObject"); 
    set s = fso.CreateTextFile("/home/zoe/Desktop/test.txt", True);
    s.writeline(naemField);
    s.Close();
}


// use an eventlistener for the event
    var subButton = document.getElementById('subButton');
    subButton.addEventListener('click', getInput, false);

