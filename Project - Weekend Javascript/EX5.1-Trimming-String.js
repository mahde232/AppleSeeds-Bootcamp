let str = "II am Mahde Halabii";

console.log(str.slice(1,-1)); //Solution 1
console.log(str.substring(1,str.length-1)); //Solution 2

let temp = str.split(''); //Solution 3
temp.pop();
temp.shift();
console.log(temp.join(''));