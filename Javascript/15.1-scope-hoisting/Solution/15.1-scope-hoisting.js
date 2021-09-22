console.log('-----Block 1-----');
function funcA() {
    //var a; //this should fix it
    console.log(a); //this outputs "undefined" because a declaration is hoisted up but value isnt.
    console.log(foo()); //this outputs normally because foo()'s declaration gets hoisted and is called normally.
    var a = 1;
    function foo() {
        return 2;
    }
}
funcA();

console.log('-----Block 2-----');

var fullName = 'John Doe';
var obj = {
    fullName: 'Colin Ihrig',
    prop: {
        fullName: 'Aurelio De Rosa',
        getFullName: function () {
            return this.fullName;
        }
        // getFullName: () => {
        //     return this.fullName;
        // }
    }
};
console.log(obj.prop.getFullName()); //this should call the function inside of the object prop normally.
// var test = obj.prop.getFullName;
// console.log(test());
var test = obj.prop.getFullName();
console.log(test);

console.log('-----Block 3-----');

let a = 0, b = 0;
function funcB() {
    //let a = b = 0; //this writing isnt correct
    a++;
    return a;
}
// funcB();
console.log(funcB());
console.log(typeof a);
console.log(typeof b);

console.log('-----Block 4-----');

//function funcC() { //change function name to a unique one so it doesnt get overriden by the 2nd declaration
function funcB() {
    console.log("1");
}
funcB();
function funcC() {
    console.log("2");
}
funcC();

console.log('-----Block 5-----');

function funcD1() {
    d = 1; //this works because d is global.
}
funcD1();
console.log(d);
var e;
function funcD2() {
    // var e = 1; //this doesn't work because e is declared as var, which is function-scope-bound
    e = 1;
}
funcD2();
console.log(e);

console.log('-----Block 6-----');

function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f); //this is undefined because f declaration is hoisted up, but the value isnt inserted yet.
var f = 1;
funcE();