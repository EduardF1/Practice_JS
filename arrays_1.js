var names = ["John", "Karl", "Laila"];
// function whosPaying(names) {
//     return names[Math.floor(Math.random() * names.length)] + " is going to buy lunch today!";
// }

function whosPaying(names) {

    var numberOfPeople = names.length;
    var randomPersonIndex = Math.floor(Math.random() * numberOfPeople);
    var randomPerson = names[randomPersonIndex];

    return randomPerson + " is going to buy lunch today!";
}

whosPaying(names);
