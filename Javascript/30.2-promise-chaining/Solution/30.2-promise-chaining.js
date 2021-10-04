function makeAllCaps(arr) {
    return new Promise((resolve, reject) => {
        let resArr = arr.map((element) => { //check if there is any numbers
            if (!(typeof element == 'string'))
                reject('array contains elements that arent string'); //exist promise with error
            else { //element is word
                return element.toUpperCase();
            }
        });
        //if we reach this line, this means we only have words, and we already capitalized them
        resolve(resArr);
    })
}
function sortWords(arr) {
    return new Promise((resolve, reject) => {
        if (arr) {
            arr.sort((a, b) => a.localeCompare(b));
            resolve(arr);
        }
        else
            reject('problem with array')
    })
}

//let arrOfWords = ['asaad', 'nasim', 'mahde', 'samer', 'amir','amar'];
let arrOfWords = [[], 'nasim', 'mahde', 'samer', 'amir'];

// makeAllCaps(arrOfWords).then((resultArr) => {
//     sortWords(resultArr).then((result)=>{
//         console.log(result);
//     }).catch((err) => console.log(err))
// }).catch((err)=> console.log(err));

makeAllCaps(arrOfWords).then((resultArr) => {
    return sortWords(resultArr);
}).then((result)=>{
    console.log(result);
}).catch((err) => console.log(err))
