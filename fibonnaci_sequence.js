// function fibonacciGenerator(n) {
//     var output = [];
//     if (n === 1) {
//         output = [0];
//         return output;
//     } else if (n === 2) {
//         output = [0, 1];
//         return output;
//     } else {
//         output = [0, 1];
//         count = 1;
//         while(count < (n-1))
//         {
//             output.push(output[count] + output[count-1]);
//             count++;
//         }
//         return output;
//     }
// }

// fibonacciGenerator(10);

// function fibonacciGenerator(n) {
//     var output = [];
//     switch (n) {
//     case 1:
//         output = [0];
//         break;
//     case 2:
//         output = [0, 1];
//         break;
//     default:
//         output = [0, 1];
//         while (output.length !== n) {
//             output.push(output[output.length - 1] + output[output.length - 2]);
//         }
//         break;
//     }
//     return output;

// }

function fibonacciGenerator(n) {

    var output = [];
    
    for (var i = 0; i < n; i++) {
        var len = output.length;

        if (i < 2)
            output.push(i);
        else
            output.push(output[len - 1] + output[len - 2]);
    }

    return output;

}

fibonacciGenerator(10);
