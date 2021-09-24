function Tribonacci(n) { //Iterative
    let tribonacciArr = [1,1,1]
    for (let i = 3; i < n; i++) {
        tribonacciArr.push(tribonacciArr[i-1] + tribonacciArr[i-2] + tribonacciArr[i-3]);
    }
    if(n == 2 || n == 1 || n == 0)
        return tribonacciArr = [1];
    return tribonacciArr;
}

function Tribo(n) { //Recursion
    if(n == 3 || n == 2 || n == 1)
        return 1;
    return Tribo(n-1) + Tribo(n-2) + Tribo(n-3);
}

console.log(Tribonacci(20));
console.log(Tribo(20));