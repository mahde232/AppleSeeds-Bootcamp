const newReleases = [
    {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
    },
    {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
    },
    {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: [],
    },
    {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
    },
];

function forEachMethod(arr) {
    let tempArr = [];
    arr.forEach(element => {
        let tempObj = {};
        tempObj['id']=element.id;
        tempObj['name']=element.title;
        tempArr.push(tempObj)
    });
    return tempArr;
}
function mapMethod(arr) {
    let tempArr = arr.map((obj) => {
        let tempObj = {}
        tempObj['id']=obj.id;
        tempObj['name']=obj.title;
        return tempObj;
    });
    return tempArr;
}

console.log(forEachMethod(newReleases));
console.log();
console.log(mapMethod(newReleases));