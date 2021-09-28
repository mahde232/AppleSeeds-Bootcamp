const submitBtn = document.querySelector('#submit');
const inputText = document.querySelector('#inputText');
const targetDiv = document.querySelector('#smileyDiv');
const errorDiv = document.querySelector('#error');


submitBtn.addEventListener('click', function () {
    console.log(inputText.value);
    if (isNaN(inputText.value) || !inputText.value || inputText.value <= 0) {
        errorDiv.style.visibility = 'visible';
        targetDiv.innerHTML = '';

    }
    else {
        targetDiv.innerHTML = smileyHtmlCode(Math.floor(inputText.value));
        errorDiv.style.visibility = 'hidden';
    }
});


function smileyHtmlCode(num) {
    let string = '';
    for (let i = 0; i < num; i++)
        string += `<img src="smiley.jpg" alt="" style="width: 100px; height: 100px; display: inline-block;"> `;
    return string;
}