object1 = {
    name: 'Object-1'
}
object2 = {
    name: 'Object-2'
}
object3 = {
    name: 'Object-3'
}
let temp = new Map();

temp.set(object1,"1");
temp.set(object2,"2");
temp.set(object3,"3");

for (let [key,value] of temp) {
    console.log(`key="${key.name}", value=${value}`);
}