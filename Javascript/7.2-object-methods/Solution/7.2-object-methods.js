let myCountry = {
    country: 'Israel',
    capital: 'Jerusalem',
    language: 'Hebrew',
    population: '7 million',
    neighbors: ['Lebanon','Syria','Egypt','Jordan']
}

myCountry.describe = function() {
    console.log(`${this.country} has ${this.population} people, their mother tongue is ${this.language}, they have ${this.neighbors.length} neighboring countries, and a capital called ${this.capital}`);
};
myCountry.checkIsland = function() {
    myCountry.isIsland = (this.neighbors.length == 0 ? true : false);
}

myCountry.describe();
myCountry.checkIsland();
console.log(myCountry);