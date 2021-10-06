//Query selectors
const containerDiv = document.querySelector('#questionsContainer');
const questionsContainer = document.querySelector('#questionDiv');
let possibleAnswers, currentQuestion, currentQuestionID = 0, choseAnswer = false, TFQuestions, MTQuestions, questionsList, score=0, amountOfQuestions = 20;

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
        data = await((await (fetch(apiURL))).json()); //grab data and turn into objects
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
    //CHANGE TO 1 LET
    let urlToUse = '', str = '', rollDice = Math.round(Math.random());
    if(rollDice)
    { //cat api
        urlToUse = `https://cataas.com/${(await ((await fetch('https://cataas.com/cat?json=true')).json())).url}`;
    }
    else
    { //dog api
        urlToUse = (await ((await fetch(`https://dog.ceo/api/breeds/image/random`)).json())).message;
    }
    str += `<div><img src="${urlToUse}" height='300px' width='300px'></div>`
    return str;
}
async function buildQuestionHTML(data, id) {
    console.log('Question ',id);
    let str = `<h2 style="margin-bottom: 2vh">Question #${id + 1}</h2>`;
    if (data.type == 'boolean') {
        str += `<span style='margin-bottom: 3vh'>${data.question}</span>`
        str += await addImage();
        str +=
            `<div style="display: flex; align-items: center; justify-content: space-between;">
        <button class='option'>True</button><br><button class='option'>False</button>
        </div>`
    }
    else //multiple choice
    {
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
    let possibleAnswers = shuffle([correct, ...incorrect]);
    let str = '';
    //try using map
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
        document.querySelector('#scoreboard').textContent = `Score: ${score}`;
    }
}
async function nextQuestion() {
    ++currentQuestionID;
    choseAnswer=false;
    if(currentQuestionID < amountOfQuestions) //didn't finish exam.
    {
        currentQuestion = questionsList[currentQuestionID];
        let htmlToInsert = await buildQuestionHTML(questionsList[currentQuestionID], currentQuestionID);
        htmlToInsert += `<div style='margin-top: 2vh;'><button id='skipBtn'>Skip Question</button></div>`
        questionsContainer.innerHTML = htmlToInsert;
        document.querySelectorAll('.option').forEach(questionBtn => {
            questionBtn.addEventListener('click', possibleAnswerClick);
        });
        document.querySelector('#skipBtn').addEventListener('click', nextQuestion)
    }
    else
    {
        document.querySelector('#scoreboard').style.visibility = 'hidden';
        questionsContainer.innerHTML= `CONGRATULATIONS! You finished with score of ${score}! <br> <img src="./img/giphy.gif">`
    }
}
async function startGame() {
    document.querySelector('#welcomeMenu').style.zIndex = '-1';
    questionsContainer.style.zIndex = '1';
    containerDiv.style.zIndex = '1';

    questionsList = await grabQuestions();
    currentQuestion = questionsList[0];
    let htmlToInsert = await buildQuestionHTML(questionsList[0], 0);
    htmlToInsert += `<div style='margin-top: 2vh;'><button id='skipBtn'>Skip Question</button></div>`
    questionsContainer.innerHTML = htmlToInsert;
    document.querySelectorAll('.option').forEach(questionBtn => {
        questionBtn.addEventListener('click', possibleAnswerClick);
    });
    document.querySelector('#skipBtn').addEventListener('click', nextQuestion)
}

//event listeners
document.querySelector('#startBtn').addEventListener('click', startGame);
