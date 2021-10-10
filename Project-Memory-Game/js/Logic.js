//global params
let gameSize, choseOldCard, amountOfCorrectGuesses = 0;
//functions
function createCardHTML(cardName, selectedTheme) {
    // return `<div class='${cardName} card' style='background-image: url("./img/${selectedTheme}/${cardName}.jpg"); background-repeat: no-repeat; background-size: contain; background-position-x: center; background-position-y: center;'> </div>`;
    return `<div class='${cardName} card unopened'> </div>`;
}
function createAllCardsHTML(selectedTheme) {
    let arrayOfCardsHtml = [], str = '';
    for (let i = 1; i <= gameSize / 2; i++) //first batch of cards
        arrayOfCardsHtml.push(createCardHTML(`card-${i}`, selectedTheme));
    for (let i = 1; i <= gameSize / 2; i++) //second batch of cards
        arrayOfCardsHtml.push(createCardHTML(`card-${i}`, selectedTheme));
    arrayOfCardsHtml = shuffle(arrayOfCardsHtml)
    arrayOfCardsHtml.forEach(card => {
        str += card;
    });
    return str;
}
function createGame(selectedTheme, size) {
    gameSize = size;
    switch (selectedTheme) {
        case 'Halloween':
            document.querySelector('#cardsFlex').innerHTML = createAllCardsHTML(selectedTheme)
            break;
        case 'Mario':
            document.querySelector('#cardsFlex').innerHTML = createAllCardsHTML(selectedTheme)
            break;
        case 'Reserved For Future Themes':
            //reserved
            break;
    }
}
function revealCard(e) {
    let selectedTheme = document.querySelector('#theme-select').value;
    let cardName;
    if (!choseOldCard) //no old card selected
    {
        console.log('doesnt have old card');
        choseOldCard = e.target;
        cardName = e.target.classList[0];
        e.target.style = `background-image: url("./img/${selectedTheme}/${cardName}.jpg"); background-repeat: no-repeat; background-size: contain; background-position-x: center; background-position-y: center`;
        openCard(e.target)
    }
    else //we already opened a card before
    {
        if (e.target === choseOldCard) { //same card
            console.log('clicked same card twice');
        }
        else { //not same card
            console.log('has old card');
            cardName = e.target.classList[0];
            e.target.style = `background-image: url("./img/${selectedTheme}/${cardName}.jpg"); background-repeat: no-repeat; background-size: contain; background-position-x: center; background-position-y: center`;
            if (choseOldCard.classList[0] === e.target.classList[0]) //equals same card
            {
                console.log('correct pair guess');
                e.target.removeEventListener('click', revealCard);
                choseOldCard.removeEventListener('click', revealCard);
                openCard(e.target)
                openCard(choseOldCard)
                choseOldCard = null;
                amountOfCorrectGuesses += 2;
                document.querySelector('#success').play();
            }
            else //cards arent the same
            {
                console.log('incorrect pair guess');
                document.querySelectorAll('.card').forEach(element => {
                    element.removeEventListener('click', revealCard)
                });
                setTimeout(() => {
                    closeCard(e.target)
                    closeCard(choseOldCard)
                    e.target.style = '';
                    choseOldCard.style = '';
                    choseOldCard = null;
                    document.querySelectorAll('.unopened').forEach(element => {
                        element.addEventListener('click', revealCard)
                    });
                }, 1000);
                document.querySelector('#fail').play();
            }
            console.log('correct pairs so far',amountOfCorrectGuesses);
            if (amountOfCorrectGuesses == gameSize) {
                setTimeout(() => {
                    console.log('winner');
                    document.querySelector('#win').play();
                    document.querySelector('#gameContainer').innerHTML = `<div>YOU WON <br> <button id='reloadBtn'>Play Again</button></div>`;
                    document.querySelector('#reloadBtn').addEventListener('click', () => {
                        location.reload();
                    })
                }, 1000);
            }
        }
    }
}
//useful functions
function openCard(card) {
    card.classList.remove('unopened');
    card.classList.add('opened');
}
function closeCard(card) {
    card.classList.remove('opened');
    card.classList.add('unopened');
}
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
}
//eventListeners
document.querySelector('#startGameBtn').addEventListener('click', function () {
    document.querySelector('#cardsFlex').style.justifyContent = 'space-between';

    createGame(document.querySelector('#theme-select').value, document.querySelector('#difficulty-select').value);
    document.querySelectorAll('.card').forEach(element => {
        element.addEventListener('click', revealCard);
    })
})