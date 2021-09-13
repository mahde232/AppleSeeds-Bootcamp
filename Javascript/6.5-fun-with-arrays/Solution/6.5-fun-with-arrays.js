let arr = Array(100).fill("potato");
console.log(`${arr} ${arr.length}`);

let arr2 = [...Array(101).keys()].slice(1); //spread an array from 0 to 100, applies keys() to get indexes, remove the 0.
console.log(arr2);

console.log('The type of arr2 is: ', Object.prototype.toString.call(arr2));

let arr3 = arr2.slice(); //copy by value.