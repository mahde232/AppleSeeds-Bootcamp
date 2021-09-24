function nextPerfectSquare(num){
    if(Math.sqrt(num) % 1 == 0)
        return Math.pow(Math.sqrt(num)+1,2);
    else
        return -1;
}

console.log(nextPerfectSquare(121)); //144
console.log(nextPerfectSquare(625)); //676
console.log(nextPerfectSquare(114)); //-1