// function fizzBuzz() {
//     var output=[];
//     var count = 1;
//     while (count <= 100) {
//         if (count % 3 === 0 && count % 5 === 0) {
//             output.push("FizzBuzz");
//         } else if (count % 5 === 0) {
//             output.push("Buzz");
//         } else if (count % 3 === 0) {
//             output.push("Fizz");
//         } else {
//             output.push(count);
//         }
//         count++;
//     }
//     return output;
// }

// console.log(fizzBuzz());

function fizzBuzz() {
    var output = [];
    for (count = 1; count <= 100; count++) {
        if (count % 3 === 0 && count % 5 === 0) {
            output.push("FizzBuzz");
        } else if (count % 5 === 0) {
            output.push("Buzz");
        } else if (count % 3 === 0) {
            output.push("Fizz");
        } else {
            output.push(count);
        }
    }
    return output;
}

console.log(fizzBuzz());
