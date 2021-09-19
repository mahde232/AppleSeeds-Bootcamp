const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

function getNames(data) {
    return data.map((dataset) => {
        return dataset.name;
    })
}
function getBefore1990(data) {
    return data.filter((dataset) => {
        if(Number(dataset.birthday.split('-')[2]) < 1990)
            return dataset;
    })
}
function extractFood(data) {
    let obj = {};
    data.forEach(dataset => {
        dataset.favoriteFoods.meats.forEach(element => {
            if(!(element in obj))
                obj[element] = 1;
            else
                obj[element]++;
        });
        dataset.favoriteFoods.fish.forEach(element => {
            if(!(element in obj))
                obj[element] = 1;
            else
                obj[element]++;
        })
    });
    return obj;
}

console.log(getNames(data));
console.log(getBefore1990(data));
console.log(extractFood(data));