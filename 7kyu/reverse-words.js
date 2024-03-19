// DESCRIPTION:
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// SOLUTION:
function reverseWords(str) {
    const array = str.split(' ');
    const reverseArray = array.map(item => item.split('').reverse().join(''));

    return reverseArray.join(' ');
}