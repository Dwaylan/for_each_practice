'use strict'

// Regular Expression is a shortcut for finding patterns in data.
// It looks scary at first but it's actually really easy because it, itself, follows a pattern. 
// You can use RegEx to quickly and efficiently find keywords or characters that you would 
// otherwise have to type out manually. While we're learning callbacks like .filter() and .reduce(),
// we should also learn about RegEx and start thinking about ways you can use this new tool to our advantage

// How to define regEx

let reg = /a/;
// the function above is saying "match if you find the character 'a"

reg.test('a')
// this test passed a string with 'a'. Hypothetically this should return
// true if console logged 

console.log(reg.test('a'))
// This logs the result as true

// What about cases 