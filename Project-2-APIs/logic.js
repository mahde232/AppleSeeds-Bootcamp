//Query selectors
const startBtn = document.querySelector('#startBtn');
const welcomeMenu = document.querySelector('#welcomeMenu')
const questionsContainer = document.querySelector('#questionsContainer');
let possibleAnswers, currentQuestion, currentQuestionID = 0, choseAnswer = false, TFQuestions, MTQuestions, questionsList, score=0;

//functions
async function grabQuestions() {
    TFQuestions = await grabQuestionsByParams(15, 10, `boolean`);
    MTQuestions = await grabQuestionsByParams(15, 10, `multiple`);
    let combinedArr = [...TFQuestions, ...MTQuestions];
    combinedArr = shuffle(combinedArr); //shuffle questions
    return combinedArr;
}

async function grabQuestionsByParams(category, amount, type) {
    const apiURL = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=easy&type=${type}`
    let data;
    try {
        data = await (fetch(apiURL)); //grab data
        data = await (data.json()); //turn into objects
    } //data contains {response code(int) , results(arr)}
    catch (err) { console.log(`Error occured: ${err}`); }
    return data.results;
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

async function addImage(){
    let urlToUse = '';
    let str = '';
    let rollDice = Math.round(Math.random());
    console.log(rollDice);
    if(rollDice)
    { //cat api
        urlToUse = await ((await fetch('https://cataas.com/cat?json=true')).json())
        urlToUse = `https://cataas.com/${urlToUse.url}`;
    }
    else
    { //dog api
        urlToUse = await ((await fetch(`https://dog.ceo/api/breeds/image/random`)).json())
        urlToUse = urlToUse.message;
    }
    str += `<div><img src="${urlToUse}" height='300px' width='300px'></div>`
    return str;
}
async function buildQuestionHTML(data, id) {
    let str;
    if (data.type == 'boolean') {
        str = `<h2 style="margin-bottom: 2vh">Question #${id + 1}</h2>`;
        str += `<span style='margin-bottom: 3vh'>${data.question}</span>`
        str += await addImage();
        str +=
            `<div style="display: flex; align-items: center; justify-content: space-between;">
        <button class='option'>True</button><br><button class='option'>False</button>
        </div>`
    }
    else //multiple choice
    {
        str = `<h2 style="margin-bottom: 2vh">Question #${id + 1}</h2>`;
        str += `<span>${data.question}</span>`
        str += await addImage();
        str +=
            `<div style="display: flex; flex-direction: column;">`
        str += createButtonsForQuestion(data.correct_answer, data.incorrect_answers);
        str += `</div>`
    }
    return str;
}
function createButtonsForQuestion(correct, incorrect) {
    let possibleAnswers = [correct, ...incorrect];
    possibleAnswers = shuffle(possibleAnswers);
    let str = '';
    possibleAnswers.forEach(element => {
        str += `<button class='option' style="margin-bottom: 1vw;">${element}</button>`;
    });
    return str;
}
function possibleAnswerClick(event) {
    if (!choseAnswer) {
        if (event.target.innerHTML == currentQuestion.correct_answer) {
            event.target.style.backgroundColor = 'green'
            score+=10;
        }
        else {
            event.target.style.backgroundColor = 'red'
        }
        choseAnswer=true;
        questionsContainer.innerHTML+=`<div style='margin-top: 2vh;'><button id='nextBtn'>Next Question</button></div>`;
        document.querySelector('#nextBtn').addEventListener('click', nextQuestion)
        document.querySelector('#skipBtn').style.visibility = 'hidden';
        document.querySelector('#skipBtn').style.display = 'none';
        //update score HTML here
    }
}
async function nextQuestion() {
    ++currentQuestionID;
    choseAnswer=false;
    currentQuestion = questionsList[currentQuestionID];
    let htmlToInsert = await buildQuestionHTML(questionsList[currentQuestionID], currentQuestionID);
    htmlToInsert += `<div style='margin-top: 2vh;'><button id='skipBtn'>Skip Question</button></div>`
    questionsContainer.innerHTML = htmlToInsert;
    possibleAnswers = document.querySelectorAll('.option');
    possibleAnswers.forEach(questionBtn => {
        questionBtn.addEventListener('click', possibleAnswerClick);
    });
    document.querySelector('#skipBtn').addEventListener('click', nextQuestion)
}
async function startGame() {
    welcomeMenu.style.zIndex = '-1';
    questionsContainer.style.zIndex = '1';

    questionsList = await grabQuestions();
    currentQuestion = questionsList[0];
    let htmlToInsert = await buildQuestionHTML(questionsList[0], 0);
    htmlToInsert += `<div style='margin-top: 2vh;'><button id='skipBtn'>Skip Question</button></div>`
    questionsContainer.innerHTML = htmlToInsert;
    possibleAnswers = document.querySelectorAll('.option');
    possibleAnswers.forEach(questionBtn => {
        questionBtn.addEventListener('click', possibleAnswerClick);
    });
    document.querySelector('#skipBtn').addEventListener('click', nextQuestion)
}

//event listeners

startBtn.addEventListener('click', startGame);
