function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} people and it's capital city is ${capitalCity}`
}

let first, second, third;

first = describeCountry('Finland','6 million','Helsinki');
second = describeCountry('Italy','60.36 million','Roma');
third = describeCountry('USA','328.2 million','Washington DC');

console.log(first);
console.log(second);
console.log(third);