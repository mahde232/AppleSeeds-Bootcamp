function calculateAvg(game1,game2,game3) {
    return (game1+game2+game3)/3;
}

let John = [89,120,103];
let Mike = [116,94,123];
// let John = [116,94,123];

let Mary = [97,134,105];
// let John = [97,134,105];
// let Mike = [97,134,105];

const johnAvg = calculateAvg(John[0],John[1],John[2]);
const mikeAvg = calculateAvg(Mike[0],Mike[1],Mike[2])
const maryAvg = calculateAvg(Mary[0],Mary[1],Mary[2])

// if(johnAvg < mikeAvg)
//     console.log(`Mike's team wins with score of ${mikeAvg}`);
//     else if (johnAvg > mikeAvg)
//             console.log(`John's team wins with score of ${johnAvg}`);
//         else
//             console.log('draw');
if(johnAvg > mikeAvg && johnAvg > maryAvg)
    console.log(`John's team wins with score of ${johnAvg}`);
if(maryAvg > mikeAvg && maryAvg > johnAvg)
    console.log(`Mary's team wins with score of ${maryAvg}`);
if(mikeAvg > johnAvg && mikeAvg > maryAvg)
    console.log(`Mike's team wins with score of ${mikeAvg}`);
if(maryAvg === johnAvg && johnAvg === mikeAvg)
    console.log('draw');