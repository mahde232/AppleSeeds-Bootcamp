const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
    "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
    "Hamburgers"];
const test = ['Potato'];

function compareArrays(arr1,arr2) {
    let similar = [];
    for(let i = 0; i < arr1.length; i++)
        for(let j = 0; j < arr2.length; j++)
            if(arr1[i]===arr2[j])
                similar.push(arr1[i]);
    if(similar.length!=0)
        return similar;
    else
        return false;
}

console.log(compareArrays(food,food1));
console.log(compareArrays(test,food1));