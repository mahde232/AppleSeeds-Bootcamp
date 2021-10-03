const storm = {
    superPower: 'flying',
    whatIsMySuperPower: printSuperPower //we need to connect the 'printSuperPower()' function to a function-variable inside the 'storm' object.
}

function printSuperPower() {
    console.log("my superpower is " + this.superPower);
}

storm.whatIsMySuperPower();