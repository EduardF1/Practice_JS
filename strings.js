// var messageMaxLength = 280;
// while(messageMaxLength > 0){
//     var message = prompt("Enter your message below.");
//     messageMaxLength -= message.length;
// alert("You have written " + message.length + " characters. You have "+ messageMaxLength + " characters remaining.");
// }
var userName = prompt("What is your name?");
alert("Hello " + userName.slice(0,1).toUpperCase() + userName.slice(1, userName.length).toLowerCase());
