const guessSpan = document.querySelector('#guess');
const bottomDiv = document.querySelector('#bottom');
const aToz = 'abcdefghijklmnopqrstuvwxyz';
let guesses = [];

function randomizeLetter() {
    return aToz[Math.floor(Math.random() * aToz.length)];
}
function checkLetter(event) {
    if (event.key.toLowerCase() == letterToGuess) //guessed
    {
        guessSpan.innerHTML = letterToGuess;
        guessSpan.style.color = "green";
        msgSpan.style.visibility = 'visible';
        msgSpan.textContent = 'YOU GUESSED IT !'
        msgSpan.style.color = 'green';
        document.removeEventListener('keyup', checkLetter);
        guesses.push(event.key.toLowerCase())
        guessesString.textContent = guesses;
        restartBtn.style.visibility = 'visible';
    }
    else if (aToz.includes(event.key.toLowerCase())) //wrong guess
    {
        if (guesses.includes(event.key.toLowerCase())) //already tried this letter
        {
            msgSpan.style.visibility = 'visible';
            msgSpan.textContent = 'Already tried this letter';
            msgSpan.style.color = 'red';
        }
        else //new tried letter
        {
            guesses.push(event.key.toLowerCase())
            msgSpan.style.visibility = 'visible';
            msgSpan.textContent = 'Wrong letter';
            msgSpan.style.color = 'red';
            guessesString.textContent = guesses;
        }
    }
    else if(event.key != 'F5') //not a letter (f5 check here because it was counting f5 as an invalid key)
    {
        msgSpan.style.visibility = 'visible';
        msgSpan.textContent = 'Enter valid letter please';
        msgSpan.style.color = 'red';
    }
}

let letterToGuess = randomizeLetter();

const msgSpan = document.createElement('span');
msgSpan.style.visibility = 'hidden';
msgSpan.style.display = 'block';
msgSpan.style.marginTop = '20px';

const guessesString = document.createElement('span');
guessesString.style.display = 'block';
guessesString.style.marginTop = '5px';

const restartBtn = document.createElement('button');
restartBtn.textContent='Play Again';
restartBtn.style.visibility = 'hidden';
restartBtn.style.marginTop = '10px';

bottomDiv.append(msgSpan, guessesString,restartBtn)

document.addEventListener('keyup', checkLetter);
restartBtn.addEventListener('click',() => {
    location.reload();
})
