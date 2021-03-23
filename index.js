// /* global moment */ 

var moment = require('moment');
var math = require('mathjs');

console.log("Hello from JavaScript!");


var exampleDate = moment("20200312", "YYYYMMDD").fromNow();

console.log("If I recall correctly, COVID lockdown started about:");
console.log(exampleDate);


console.log("The approximate time today is:");
console.log(moment().format('MMMM Do YYYY, h:mm:ss a')); // March 23rd 2021, 11:55:46 am


console.log(math.evaluate('1.2 * (2 + 4.5)'));


// Test that Babel is working:
console.log(`In ES5 this is
 not legal.`);


console.log("strawberry crepes");
console.log("cupcakes with frosting and sprinkles");