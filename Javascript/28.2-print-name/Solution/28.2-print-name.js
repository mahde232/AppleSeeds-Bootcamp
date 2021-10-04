let obj = {
    name: 'mahde',
    printName: function() {
        console.log(this.name);
    },
    printNameDelayed: function() {
        setTimeout(function(){
            console.log(this.name);
        }.bind(this),1000)
    }
}

console.log(obj.name);
obj.printName();
obj.printNameDelayed();