/*
--Delete the wrong answers--

1. Which of the following is/are strings?

a) 4
b) 4.0
c) '4' <- correct answer

2. Which of the following is/are numbers?

a) 4 <- correct answer
b) 4.0 <- correct answer
c) '4' <- (technically an ascii representation which is usually a number combination)
d) -4 <- correct answer

3. Which of the following is/are booleans?

a) true <- correct answer
b) false <- correct answer
c) "true"

4. What is the result of 80 + 71.2?

a) 151.2 <- correct answer
b) 151
c) 8071.2 

5. What is the result of "80" + 71.2?

a) 151.2
b) 151
c) "8071.2" <- correct answer

6. Does 100 + 30 produce a number or a string?

a) number <- correct answer
b) string

7. Does "100" + 30 produce a number or a string?

a) number
b) string <- correct answer

*/

//------Submit your answers under the question------//

//create three different ways to declare variables
let x;
x = 10;

let y = 10;

let z = x + y;
//declare a variable and reassign a value to it
let foo = 10;
foo = 20;
//create a variable and after that assign a string with its value being: He's got it!
let foo2 = 10;
console.log(foo2);
foo2 = "He's got it!";
console.log(foo2);
/*
1. create a variable and assign a value on how much a restaurant bill is.
2. create a variable and assign a value on how much tax they should pay.
3. create a variable that will calculate the bill * tax and its output would be: Your total bill is <total bill> $.
 */
let bill = 1200;
let tax = 0.1;

let payment = bill + bill*tax;
console.log(payment);
// Round the number 50.6 to its nearest integer
let dec = 50.6;
console.log(Math.round(dec));
//Create a variable that is undefined
let foo3 = undefined;