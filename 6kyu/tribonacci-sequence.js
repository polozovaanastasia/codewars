// DESCRIPTION:
// Well met with Fibonacci bigger brother, AKA Tribonacci.

// As the name may already reveal, it works basically like a Fibonacci,
// but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably
// I won't get to hear non-native Italian speakers trying to pronounce it :(

// SOLUTION:
const tribonacci = (s, n) => {
    var arr = [];
    for (var i = 0; i < n; i++) {
        arr.push((i < 3) ? s[i] : arr[i - 1] + arr[i - 2] + arr[i - 3]);
    }
    return arr;
}