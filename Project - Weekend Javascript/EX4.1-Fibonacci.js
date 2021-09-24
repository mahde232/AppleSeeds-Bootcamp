function fibonacci(n) { //Iterative
    let fibonacciArr = [1,1];
    for (let i = 2; i < n; i++) {
        fibonacciArr.push(fibonacciArr[i-1] + fibonacciArr[i-2]);
    }
    if(n == 1 || n == 0)
        return fibonacciArr = [1];
    return fibonacciArr;
}

function Fibo(n) { //Recursion
    if(n==2 || n==1)
        return 1;
    return Fibo(n-1) + Fibo(n-2);
}

console.log(fibonacci(30));
console.log(Fibo(30));