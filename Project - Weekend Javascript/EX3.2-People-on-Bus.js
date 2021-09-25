function peopleOnBus(arr) {
    let peopleOnBus = 0;
    arr.forEach(element => {
        //console.log('people before stop=',peopleOnBus);
        peopleOnBus += element[0]-element[1];
        //console.log('people after stop=',peopleOnBus);
        console.log();
    });
    return peopleOnBus;
}

let arr = [
    [5,0],
    [3,6],
    [10,3],
    [2,10]
]
console.log('people left in bus on last stop = ',peopleOnBus(arr));