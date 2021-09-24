function SumOfLowest(arr){
    let sortedArr = arr.sort((a,b) => a - b).slice(0,2);
    console.log(sortedArr);
    return sortedArr[0]+sortedArr[1];
}

let arr =  [19, 5, 42, 2, 77];
console.log(SumOfLowest(arr));
arr = [10, 343445353, 3453445, 3453545353453];
console.log(SumOfLowest(arr));