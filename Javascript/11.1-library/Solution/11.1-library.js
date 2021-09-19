let library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true
    },
    {
        author: "Steve Jobs",
        title: "Walter Isaacson",
        readingStatus: true
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false
    }
];

// function isReadable(data) {
//     return data.filter(dataset => {
//         if(dataset.readingStatus === true)
//             return true;
//         else
//             return false;
//     })
// }

function isReadable2(data) {
    return data.filter(dataset => dataset.readingStatus ? true : false)
}

//console.log(isReadable(library));
console.log(isReadable2(library));