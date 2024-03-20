// DESCRIPTION:
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// SOLUTION:
const reverseSeq = n => {
    let result = [];
    while (n > 0) {
        result.push(n);
        n--;
    }
    return result;
};