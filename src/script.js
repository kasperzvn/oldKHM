
const Button = document.getElementById('scrolltoformbutton');
const sendButton = document.getElementById('sendbutton');
const Contactform = document.getElementById('scrollcontactform');

Button.onclick = function() {
    Contactform.scrollIntoView({behavior:"smooth",block:"center"})
};

sendButton.onclick = function () {

};