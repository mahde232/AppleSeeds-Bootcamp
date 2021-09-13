function avgJumper(arr) {
    let avgOfEach = [];
    for(let i = 0; i < arr.length; i+=3) {
        let sum = 0;
        let cnt = 0;
        for(let j = 0; j < 3; j++) //each jumper has 3 tries
        {
            if(arr[j+i] !== -1) //check if a try is valid
            {
                sum+=arr[j+i];
                cnt++;
            }
        }
        avgOfEach.push(sum/cnt); //calculate jumper avg and push it to array
    }
    return avgOfEach;
}
function bestAvgJumper(arr) {
    return Math.max(...avgJumper(arr));
}
function bestJump(arr) {
    return Math.max(...arr);
}

let jumpsCollection = [5,5,8,7,-1,5];
console.log(avgJumper(jumpsCollection));
console.log('Best average was: ',bestAvgJumper(jumpsCollection));
console.log('Best jump was: ',bestJump(jumpsCollection));