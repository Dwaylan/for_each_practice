// Higher order functions are functions that take in other functions


// The .forEach() method can be called on any array.
// This function iterates through all of the values in an array and uses the callback function
//  passed to it to do something with the value. 
// If you have ever used a for loop that looks something like this: 
// for (let i =0; i < arr.length; i++){//do something} 
// then you have essentially created the functionality of a forEach loop in long-hand.

// Try it out 
const myExes = ['Daniel', 'Adriano', 'Matthew', 'Christian'];

// Translation: I created a constant, or non-changing, function called "myExes"
// Inside I passed an array of strings with their names

myExes.forEach((myExes) =>{
    console.log('I was incompatible with ${myExes}' );
});
// I called the "myExes" function and passed the array of the names
// for each string/name within the array I want to long "I was incompatible
// with" plus their names