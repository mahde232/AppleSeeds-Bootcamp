const startHereLI = document.querySelector('.start-here');
const targetUL = document.querySelector('ul li ul'); //grab the inner ul
const listOfLIs = document.querySelectorAll('li');
const outerUL = document.querySelector('ul');
const pInsideDiv = document.querySelector('div p');

startHereLI.innerText = 'main title';

const newLI = document.createElement('li');
newLI.innerText = 'sub title 4';
targetUL.appendChild(newLI);

listOfLIs.forEach(li => { //find the li we want
    if(li.innerText=='title 3')
    outerUL.removeChild(li); //remove it
});

document.title = 'Master Of The Dom'

pInsideDiv.innerText = 'potato man'