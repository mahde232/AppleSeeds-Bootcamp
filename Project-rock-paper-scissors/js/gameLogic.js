//global parameters
let player1score = 0, player2score = 0;

//functions


//useful small functions
function randomizePlayer2Action() {
    let possibleActions = ['Rock', 'Paper', 'Scissors'];
    return possibleActions[Math.floor(Math.random() * possibleActions.length)]
}

//event listeners
function simulateGame(event) {
    let player1Action = event.target.textContent;
    let player2SimulatedAction = randomizePlayer2Action();
    switch (player2SimulatedAction) {
        case 'Rock':
            switch (event.target.textContent) {
                case 'Rock':
                    console.log(`${player1Action} vs ${player2SimulatedAction} = Tie`);
                    document.querySelector('#gameSimulations').innerHTML += `<div>${player1Action} vs ${player2SimulatedAction} = Tie</div>`;
                    break;
                case 'Paper':
                    console.log(`${player1Action} vs ${player2SimulatedAction} = Player 1 wins`);
                    player1score++;
                    document.querySelector('#player1score').textContent = player1score;
                    document.querySelector('#gameSimulations').innerHTML += `<div>${player1Action} vs ${player2SimulatedAction} = Player 1 wins</div>`;
                    break;
                case 'Scissors':
                    console.log(`${player1Action} vs ${player2SimulatedAction} = Player 2 wins`);
                    player2score++;
                    document.querySelector('#player2score').textContent = player2score;
                    document.querySelector('#gameSimulations').innerHTML += `<div>${player1Action} vs ${player2SimulatedAction} = Player 2 wins</div>`;
                    break;
            }
            document.querySelector('#player2Actions').innerHTML += `<div>Played ${player2SimulatedAction}</div>`;
            break;
        case 'Paper':
            switch (event.target.textContent) {
                case 'Rock':
                    console.log(`${player1Action} vs ${player2SimulatedAction} = Player 2 wins`);
                    player2score++;
                    document.querySelector('#player2score').textContent = player2score;
                    document.querySelector('#gameSimulations').innerHTML += `<div>${player1Action} vs ${player2SimulatedAction} = Player 2 wins</div>`;
                    break;
                case 'Paper':
                    console.log(`${player1Action} vs ${player2SimulatedAction} = Tie`);
                    document.querySelector('#gameSimulations').innerHTML += `<div>${player1Action} vs ${player2SimulatedAction} = Tie</div>`;
                    break;
                case 'Scissors':
                    console.log(`${player1Action} vs ${player2SimulatedAction} = Player 1 wins`);
                    player1score++;
                    document.querySelector('#player1score').textContent = player1score;
                    document.querySelector('#gameSimulations').innerHTML += `<div>${player1Action} vs ${player2SimulatedAction} = Player 1 wins</div>`;
                    break;
            }
            document.querySelector('#player2Actions').innerHTML += `<div>Played ${player2SimulatedAction}</div>`;
            break;
        case 'Scissors':
            switch (event.target.textContent) {
                case 'Rock':
                    console.log(`${player1Action} vs ${player2SimulatedAction} = Player 1 wins`);
                    player1score++;
                    document.querySelector('#player1score').textContent = player1score;
                    document.querySelector('#gameSimulations').innerHTML += `<div>${player1Action} vs ${player2SimulatedAction} = Player 1 wins</div>`;
                    break;
                case 'Paper':
                    console.log(`${player1Action} vs ${player2SimulatedAction} = Player 2 wins`);
                    player2score++;
                    document.querySelector('#player2score').textContent = player2score;
                    document.querySelector('#gameSimulations').innerHTML += `<div>${player1Action} vs ${player2SimulatedAction} = Player 2 wins</div>`;
                    break;
                case 'Scissors':
                    console.log(`${player1Action} vs ${player2SimulatedAction} = Tie`);
                    document.querySelector('#gameSimulations').innerHTML += `<div>${player1Action} vs ${player2SimulatedAction} = Tie</div>`;
                    break;
            }
            document.querySelector('#player2Actions').innerHTML += `<div>Played ${player2SimulatedAction}</div>`;
            break;
    }
}
window.onload = function () {
    document.querySelectorAll('.playerAction').forEach(btn => {
        btn.addEventListener('click', simulateGame)
    })
}