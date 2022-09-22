let sum :number = 0;
let array: number [] = [0]

function Fibonacci(x:number):number {
    if (x==1||x==2){
        return 1;
    }
    return Fibonacci (x-1) + Fibonacci(x-2)
}
for (let i =1; i <30; i++){
    array.push(Fibonacci(i));
    sum+=Fibonacci(i);
}
console.log("30 số fibonacci đầu tiên là: " + array.toString())
console.log(("Tổng của dãy 30 số fibonacci là: " + sum))