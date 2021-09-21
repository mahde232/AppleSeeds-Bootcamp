function findSmallest(a, b, c) {
    //if (a > b > c) { //here are evaluating: (a > b) > c, which is also (false = -1) > c ,
    if (a > c && b > c) {
        return c;
    //} else if (a > c > b) { //here, if a > c then the comparision will be, is (true = 1) > b? , which doesnt always give us the correct minimum
    } else if (b > a && c > a) {
        return a;
    } else {
        return b;
    }
}
//findSmalest(52, 66, 2);
console.log(findSmallest(52, 66, 2));
console.log(findSmallest(66, 52, 2));
console.log(findSmallest(2, 66, 52));
console.log(findSmallest(52, 2, 66));
console.log(findSmallest(66, 2, 52));

//The function call contains a wrong name, it is missing the letter L.
// the code is prone to mistakes because inside the IF expression, the questions are logical, not math.