function Unique(arr){
    let sortedArr = arr.sort((a,b) => a - b);
    console.log(sortedArr);
    if(sortedArr[0]==sortedArr[1])
        return sortedArr.pop();
    else
        return sortedArr.shift();
}

let arr =  [1,1,1,2,1,1];
console.log(Unique(arr));
arr = [0,0,-0.55,0,0];
console.log(Unique(arr));