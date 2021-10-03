function Pokemon(pokemonName, pokemonType, pokemonAttackList){
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;
    this.callPokemon = function() {
        console.log(`I choose you, ${this.name}`)
    };
    this.attack = function(id) {
        console.log(`${this.name} used ${this.attackList[id]}`)
    };
}

let ditto = new Pokemon('Ditto','Normal',['Transform','Mirror'])
let pikachu = new Pokemon('Pikachu','Electric',['Shock','Thunder'])
let mewtwo = new Pokemon('Mewtwo','Psychic',['Confusion','Psystrike'])

ditto.callPokemon();
ditto.attack(0);
ditto.attack(1);
pikachu.callPokemon();
pikachu.attack(0);
pikachu.attack(1);
mewtwo.callPokemon();
mewtwo.attack(0);
mewtwo.attack(1);