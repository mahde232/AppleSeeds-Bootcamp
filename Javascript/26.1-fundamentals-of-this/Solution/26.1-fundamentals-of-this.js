//Question 1:
//the 'this' in line of code will corrospond to the window object.
//this happens because the only object for 'this' to grab on-to in our global scope is the window object.
console.log('Question 1');
console.log(this);
//Question 2:
//because the greet function is an arrow function, the 'this' won't grab on our supposed object.
//therefore 'this'.name' doesn't exist.
console.log('Question 2');
const myObj = {
    name: "Timmy",
    // greet: () => { //we need to change this line of code to ``` greet: function() { ```, because arrow function doesn't grab properly on the object.
    greet: function() {
    console.log(`Hello ${this.name}`);
    },
};
myObj.greet();
//Question 3:
//'this' wont point to anything because nothing is calling the 'myFuncDec' function at all.
console.log('Question 3');
const myFuncDec = function () {
    console.log(this);
};
//Question 4:
//here 'this' will corrospond to the window object, because the only object for 'this' to grab on-to in our global scope is the window object.
console.log('Question 4');
const myFuncArrow = () => {
    console.log(this);
};
myFuncArrow();
//Question 5:
//the code wont work because the eventListener doesn't know which event to look for, we need to add it.
//also we need to change from arrow function to declared function
console.log('Question 5');
// document.querySelector(".element").addEventListener(() => {
document.querySelector(".element").addEventListener('click',function() {
    console.log(this);
});