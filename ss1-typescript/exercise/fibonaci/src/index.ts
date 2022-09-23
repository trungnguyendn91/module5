let sum :number = 0;
let array: number [] = [0]

function fibonacci(x:number):number {
    if (x==1||x==2){
        return 1;
    }
    return fibonacci (x-1) + fibonacci(x-2)
}
for (let i =1; i <30; i++){
    array.push(fibonacci(i));
    sum+=fibonacci(i);
}
console.log("30 số fibonacci đầu tiên là: " + array.toString())
console.log(("Tổng của dãy 30 số fibonacci là: " + sum))
