function summation(num) {
    let sum = 0;
    for(let i = 0; i <= num; i++)
        sum += i;
    return sum;
}

console.log(summation(8)); //36
console.log(summation(1)); //1
console.log(summation(0)); //0
console.log(summation(2)); //3