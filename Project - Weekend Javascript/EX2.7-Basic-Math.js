function basicOp(operation,num1,num2) {
    switch (operation) {
        case '+':
            return num1+num2;
            break;
            
        case '-':
            return num1-num2;
            break;

        case '*':
            return num1*num2;
            break;

        case '/':
            return num1/num2;
            break;

        default:
            console.log('Error in operation');
            return NaN;
            break;
    }
}

console.log(basicOp('+',4,7));
console.log(basicOp('-',15,18));
console.log(basicOp('*',5,5));
console.log(basicOp('/',49,7));
console.log(basicOp('123123',49,7));