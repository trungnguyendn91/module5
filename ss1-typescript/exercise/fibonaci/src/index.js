var sum = 0;
var array = [0];
function Fibonacci(x) {
    if (x == 1 || x == 2) {
        return 1;
    }
    return Fibonacci(x - 1) + Fibonacci(x - 2);
}
for (var i = 1; i < 30; i++) {
    array.push(Fibonacci(i));
    sum += Fibonacci(i);
}
console.log("30 số fibonacci đầu tiên là: " + array.toString());
console.log(("Tổng của dãy 30 số fibonacci là: " + sum));
