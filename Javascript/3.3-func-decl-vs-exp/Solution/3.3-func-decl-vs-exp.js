function percentageOfWorld1(population) {
    return (population/7900 * 100);
}

let test1 = 1441;
console.log(percentageOfWorld1(test1));
let test2 = 670;
console.log(percentageOfWorld1(test2));
let test3 = 2202;
console.log(percentageOfWorld1(test3));

let test4 = function percentageOfWorld2(population) {
    return percentageOfWorld1(population);
};

console.log(test4(1234));