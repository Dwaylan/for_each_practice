// The .map() method of an array is used to create a new array that is, in some way, 
// a transformation of an existing array. 
// Similarly to a forEach loop, it takes a callback function, () => {}, 
// as its only parameter and passes every value/element in the array into the callback function.
// In the new array returned by the map method,
//  each new value is assigned to be equal to whatever the callback function returns when passed the original value. 

// Example:

const myExes = ['Daniel', 'Adriano', 'Matthew', 'Christian'];
// once again an array of my exes

const itDidntWork = myExes.map((myExes) => {
    return 'itDidntWork-${myExes}';
});
// I creaded a function called "itDidntWork"
// It's 

console.log(itDidntWork);