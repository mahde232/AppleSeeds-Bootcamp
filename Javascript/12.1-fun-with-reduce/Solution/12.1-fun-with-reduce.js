function maxUsingReduce(arr) {
    return arr.reduce((accumilator,next) => {
        return accumilator > next ? accumilator : next
    });
}
function sumEvenUsingReduce(arr) {
    let evenNums = [];
    evenNums = arr.filter((num) => { //get only the even numbers
        return num%2 == 0;
    });
    return evenNums.reduce((accumilator,next) => { //reduce them
        if(next %2 == 0)
            return accumilator + next;
        else
            return accumilator;
    });
}
function averageUsingReduce(arr) {
    let cnt = 1;
    return arr.reduce((accumilator,next) => {
        cnt++;
        return accumilator+next;
    })/cnt;
}

let arr = [1,2,3,4,5,6,7,8,9,10];

console.log('max: ',maxUsingReduce(arr));
console.log('sum: ',sumEvenUsingReduce(arr));
console.log('avg: ',averageUsingReduce(arr));