
let sum: number =0;
let count: number =0;
for (let i =2; count < 30; i++){
    let isPrimer: boolean = true;
    if(i==2)    {
        sum+=i;
        count++;
        continue;
    }
    for (let j =2; j< Math.sqrt(i); j++){
        if (i%j ==0 ){
            isPrimer = false;
            break;
        }
    }
    if (!isPrimer){
        continue;
    }
    sum+=i;
    count++;
}
console.log(sum);