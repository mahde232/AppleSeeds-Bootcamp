const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const textDiv = document.querySelector('#textDiv');
console.log(parseInt(window.getComputedStyle(textDiv).getPropertyValue('font-size')));

btn1.addEventListener('click',function(){
    if(parseInt(window.getComputedStyle(textDiv).getPropertyValue('font-size')) > 6)
    {
        btn1.style.fontSize = parseInt(window.getComputedStyle(btn1).getPropertyValue('font-size'))-2 + 'px';
        btn2.style.fontSize = parseInt(window.getComputedStyle(btn2).getPropertyValue('font-size'))-2 + 'px';
        textDiv.style.fontSize = parseInt(window.getComputedStyle(textDiv).getPropertyValue('font-size'))-2 + 'px';
    }
    console.log(parseInt(window.getComputedStyle(textDiv).getPropertyValue('font-size')));
});

btn2.addEventListener('click',function(){
    if(parseInt(window.getComputedStyle(textDiv).getPropertyValue('font-size')) < 100)
    {
        btn1.style.fontSize = parseInt(window.getComputedStyle(btn1).getPropertyValue('font-size'))+2 + 'px';
        btn2.style.fontSize = parseInt(window.getComputedStyle(btn2).getPropertyValue('font-size'))+2 + 'px';
        textDiv.style.fontSize = parseInt(window.getComputedStyle(textDiv).getPropertyValue('font-size'))+2 + 'px';
    }
    console.log(parseInt(window.getComputedStyle(textDiv).getPropertyValue('font-size')));
});