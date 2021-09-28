const textArea = document.querySelector('#textArea');
const btn = document.querySelector('#btn');
const errorText = document.querySelector('#errorText')

// btn.addEventListener('click',function() {
//     console.log(textArea.value.length);
//     if(textArea.value.length < 100)
//         {btn.style.transition = 'all 1s'
//         btn.style.background = 'red';
//         setInterval(() => {
//             btn.style.background = 'none';
//         },1100)
//     }
// })
btn.addEventListener('click',function() {
    console.log(textArea.value.length);
    if(textArea.value.length < 100)
    {
        errorText.innerHTML = 'Amount of characters is below 100 <a href="#">asdasd.com</a>';
        errorText.style.color = 'red'
    }
    if(errorText.style.visibility = "visible" && textArea.value.length >= 100)
    {
        errorText.style.visibility = "hidden"
    }
})