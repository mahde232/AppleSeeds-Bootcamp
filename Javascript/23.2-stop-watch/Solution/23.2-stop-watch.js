const minutes = document.querySelector('.minutes')
const seconds = document.querySelector('.seconds')
const miliseconds = document.querySelector('.miliseconds')
const startBtn = document.querySelector('#start')
const stopBtn = document.querySelector('#stop')
const resetBtn = document.querySelector('#reset')

let totalMiliseconds = 0;
function timer() {
    totalMiliseconds++;
    let calcMinutes = Math.floor(totalMiliseconds/100/60);
    let calcSeconds = Math.floor(totalMiliseconds/100);
    let calcMiliSeconds = Math.floor(totalMiliseconds%100);
    
    if(calcMinutes < 10)
        minutes.innerText = `0${calcMinutes}`;
    else
        minutes.innerText = `${calcMinutes}`;
    if(calcSeconds < 10)
        seconds.innerText = `0${calcSeconds}`;
    else
        seconds.innerText = `${calcSeconds}`;
    if(calcMiliSeconds < 10)
        miliseconds.innerText = `0${calcMiliSeconds}`;
    else
        miliseconds.innerText = `${calcMiliSeconds}`;
}

let timerStop;
let isPressed=false;
startBtn.addEventListener('click', () => {
    if(!isPressed)
    {
        console.log('+');
        timerStop =setInterval(timer,10)
        isPressed=true;
    }
})

stopBtn.addEventListener('click', () => {
    clearInterval(timerStop);
    isPressed=false;
})

resetBtn.addEventListener('click', () => {
    totalMiliseconds=0;
    clearInterval(timerStop);
    minutes.innerText= '00';
    seconds.innerText= '00';
    miliseconds.innerText= '00';
    isPressed=false;
})