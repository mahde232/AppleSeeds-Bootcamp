Array.prototype.myFilter = function(checkElement){
        const returnArr = [];
        for (let i = 0; i < this.length; i++) {
            if (checkElement(this[i])) {
                returnArr.push(this[i]);
            }
        }
        return returnArr;
};
Array.prototype.myForEach = function(callback){
    for(let i=0; i < this.length; i++)
        callback(this[i]);
};
Array.prototype.myMap = function(callback){
    let returnArr = [];
    for(let i=0; i < this.length; i++)
    {
        let newElement = callback(this[i])
        returnArr.push(newElement);
    }
    return returnArr;
};

let arr = [0,1,2,3,4,-5,-6,-7,-8,9,10];
let resArr1 = arr.filter(x => x > 0); //check if positive
let resArr2 = arr.myFilter(x => x > 0); //check if positive
console.log(resArr1);
console.log(resArr2);

console.log();

let arr2 = [1,2,-1,-2];
arr2.myForEach(element => {
    console.log(element);
})

console.log();

let arr3 = [1,2,3,4];
let resArr3 = arr3.myMap(element => {
    return element*element;
})
console.log(resArr3);
