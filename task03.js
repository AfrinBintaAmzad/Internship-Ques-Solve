function fib(n) {
    if (n <= 1)
        return n;
    return fib(n - 1) +
        fib(n - 2);
}
function countWays(s) {
    return fib(s + 1);
}

let s = 4;
document.write("Number of ways = " + countWays(s));

