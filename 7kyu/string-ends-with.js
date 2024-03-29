// DESCRIPTION:
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// SOLUTION:
const solution = (str, ending) => str.includes(ending, str.length - ending.length);
// or: const solution = (str, ending) => str.endsWith(ending);