function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.isSquare = checkSquare; //first way
    this.isSquare2ndImplement = function() { //second way
        if(this.a == this.b && this.b == this.c && this.c == this.d)
            return true;
        else
            return false;
    }
}

function checkSquare() {
    if(this.a == this.b && this.b == this.c && this.c == this.d)
        return true;
    else
        return false;
}

let mySquare1 = new Square(4,4,4,4);
let mySquare2 = new Square(1,2,3,4);

console.log(mySquare1);
console.log(mySquare2);

console.log(mySquare1.isSquare());
console.log(mySquare2.isSquare2ndImplement());