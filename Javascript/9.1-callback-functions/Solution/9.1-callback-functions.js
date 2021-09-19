function logString(str) {
    console.log(`string=${str}`);
}
function isString(str, func) {
    if(typeof str === 'string')
        func(str);
}
function dashes(str) {
    let temp = str.split(" ").join("-");
    console.log(temp);
}
function potatoMan() {
    console.log("I am the potato man!");
}
function firstWordUpperCase(str, func) {
    str = str[0].toUpperCase() + str.slice(1);
    func(str);
}
let test = 'hello world i am mas3ood';
isString(test,logString);

firstWordUpperCase(test,dashes);
console.log();
firstWordUpperCase(test,potatoMan);

function test1(func) {
    func();
}
function test2() {
    console.log('test');
}
test1(test2);