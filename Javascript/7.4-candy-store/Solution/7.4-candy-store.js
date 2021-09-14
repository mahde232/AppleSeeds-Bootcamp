const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
}

getCandy = function(candyStore, id) {
    return (candyStore.candies.find(element => element.id == id));
}
candyStore.getCandy = function(id) {
    return (this.candies.find(element => element.id == id));
}

getPrice = function(candyStore, id) {
    return (getCandy(candyStore,id).price);
}
candyStore.getPrice = function(id) {
    return (this.getCandy(id).price);
}

addCandy = function(candyStore,id,name,price) {
    tempCandy = {
        name: name,
        id: id,
        price: price,
        amount: 1
    }
    candyStore.candies.push(tempCandy);
}
candyStore.addCandy = function(id,name,price) {
    tempCandy = {
        name: name,
        id: id,
        price: price,
        amount: 1
    }
    this.candies.push(tempCandy);
}

buy = function(candyStore,id) {
    getCandy(candyStore,id).amount--;
    candyStore.cashRegister += getCandy(candyStore,id).price;
}
candyStore.buy = function(id) {
    candyStore.getCandy(id).amount--;
    candyStore.cashRegister += candyStore.getCandy(id).price;
}

console.log(getCandy(candyStore,"as12f")); //using object as input
console.log(candyStore.getCandy("as12f")); //using 'this'

console.log('price is = ',getPrice(candyStore,"as12f")); //using object as input
console.log('price is = ',candyStore.getPrice("as12f")); //using 'this'


console.log('before adding: ',candyStore);
addCandy(candyStore,"asd123","Milka",10)
candyStore.addCandy("123asd","Swiss",5)
console.log('after adding: ',candyStore);

console.log('before buying: ',candyStore);
buy(candyStore,"asd123");
candyStore.buy("123asd");
console.log('after buying: ',candyStore);
