const people = ["Greg", "Mary", "Devon", "James"];

people.forEach((element) => {
    console.log(element);
});

for(let i = 0; i < people.length; i++)
    if(people[i] === "Greg" || people[i] === "James")
        people.splice(i,1); //delete 1 element starting from index i

people.splice(0,0,"Matt");
// people.unshift("Matt");

people.push("Mahde");

console.log("After change:");
console.log('people=',people);

console.log("==========================================");

let j=0;
while(people[j] !== "Mary")
{
    console.log(people[j]);
    j++;
}

let newArray = people.slice(2);
console.log('newArray=',newArray);

console.log('Mary is located at index: ',people.indexOf("Mary"));
console.log('Mary is located at index: ',people.indexOf("Foo"));

let originalPeople = ["Greg", "Mary", "Devon", "James"];

originalPeople.splice(originalPeople.indexOf("Devon"),1,"Elizabeth","Artie")
console.log(originalPeople);

let withBob = people + 'Bob';
console.log(withBob);