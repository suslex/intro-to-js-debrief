let myNumber = 7;// Create variable `myNumber`
if (typeof myNumber != 'number') {
    console.log('This is not a number');
   
}   // If `myNumber` is not a number, print 'This is not a number' to the console.
let reply = ""; 

if (myNumber%3 == 0) {  //* If value of `myNumber` is a multiple of 3 print 'Gen' to the console
       reply += "Gen";
   }

if (myNumber%5 == 0) {    //* If value of `myNumber` is a multiple of 5 print 'Buzz' to the console
    reply += "Buzz";
}

if (typeof myNumber == 'number' && !reply) {
    reply = myNumber
}

console.log(reply);    //* If the value of `myNumber` is a multiple of both 3 and 5 (ex. 15) print GenBuzz to the console
   //* If the value of `myNumber` is any other number print the value of `myNumber` to the console.