// function displayLyrics() {
//     var count = 99;
//     var total = 0;
//     var keyword = " bottles"
//     while (count > 0) {
//         console.log(count + keyword + " of beer on the wall, " + count + keyword + " of beer.");
//         count--;
//         total++;
//         if (count === 1) {
//             keyword = " bottle";
//         }
//         console.log("Take one down and pass it around, " + count + keyword + " of beer on the wall.");
//         console.log("\n");
//         if (count === 1) {
//             console.log(count + keyword + " of beer on the wall, " + count + keyword + " of beer.");
//             console.log("Take one down and pass it around, no more bottles of beer on the wall.");
//             console.log("\n");
//             break;
//         }

//     }
//     total += 1;
//     console.log("No more bottles of beer on the wall, no more bottles of beer.");
//     console.log("Go to the store and buy some more, " + total + " bottles of beer on the wall");
// }

// displayLyrics();

var count = 100;
 
function beer() {
    while (count >= 0) {
        if (count >= 2) {
            console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. Take one down and pass it around, " + (count - 1) + " bottles of beer on the wall.");
        } else if (count == 1) {
            console.log(count + " bottles of beer on the wall, " + count + " bottles of beer. Take one down and pass it around, no more bottles of beer on the wall.");
        } else {
            console.log("No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, 99 bottles of beer on the wall.");
        }
 
        count--;
    }
}
 
beer();