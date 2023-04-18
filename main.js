function validateForm() {                    
//get input value
var name = document.forms['message-form']['full-name'].value;
var date = document.forms['message-form']['birth-date'].value;
var gender = document.forms['message-form']['gender'].value;
var messages = document.forms['message-form']['messages'].value;
//validate input
document.getElementById('sender-full-name').innerText = name;
document.getElementById('sender-birth-date').innerText = date;
document.getElementById('sender-gender').innerText = gender;
document.getElementById('sender-messages').innerText = messages;
return false;
}