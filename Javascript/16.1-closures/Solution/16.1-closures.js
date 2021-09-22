console.log('-----Block 1-----');

var b = 1;
function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5;
    return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
console.log(result); //it will log the value of b, which is 5
//because in line 11, we save the return of someFunction(9), which is otherfunction (as a declaration).
//therefore when calling firstResult(2), in line 12, we are actually calling otherFunction(2), which returns b, which is defined as 5 in that scope.

console.log('-----Block 2-----');

var a = 1;
function b2() {
    a = 10;
    return;
    function a() { }
}
b2();
console.log(a);
//this will return a = 1, because function b2 does declare a variable a, but it's a function, and only exists in the b2 function's scope
//therefore when doing console.log(a), the a we look at is the var a in line 19.

console.log('-----Block 3-----');

let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    }
    setTimeout(log, 100); //this function calls function (log) after a specified time.
    //when calling the function setTimeout, the i has already been iterated over and is equal to 3. 
}