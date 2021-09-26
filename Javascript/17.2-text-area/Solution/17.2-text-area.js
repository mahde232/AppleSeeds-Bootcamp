const textArea = document.querySelector('#textArea');
const btn = document.querySelector('#btn');

btn.addEventListener('click',function() {
    console.log(textArea.value.length);
    if(textArea.value.length < 100)
        {btn.style.transition = 'all 1s'
        btn.style.background = 'red';
        setInterval(() => {
            btn.style.background = 'none';
        },1100)
    }
})