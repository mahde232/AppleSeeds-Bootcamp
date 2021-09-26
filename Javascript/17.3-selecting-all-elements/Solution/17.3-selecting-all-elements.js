// const myFirstDiv = document.querySelector("#myFirstDiv");
// const mySecondDiv = document.querySelector("#mySecondDiv");
// const myThirdDiv = document.querySelector("#myThirdDiv");
// const myFourthDiv = document.querySelector("#myFourthDiv");

// or

const myDivs = document.querySelectorAll('div');
// console.log(myDivs);
for(let i=0; i < myDivs.length; i++) {
    myDivs[i].innerHTML = `this is Div #${i+1}`
}