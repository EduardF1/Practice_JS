var guestList = ["Angela", "Jack", "Pan", "James", "Lara", "Jason"];
var selectedGuest = prompt("Enter your name.");

function checkGuest(guestToCheck){
    if(guestList.includes(guestToCheck)){
        alert("You are on the list for the party.");
    }
    else {
        alert("You haven't been invited to the party.");
    }
}

checkGuest(selectedGuest);