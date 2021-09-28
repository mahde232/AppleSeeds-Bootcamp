let listOfTextbox = document.querySelectorAll('.textbox')
const sbmtBtn = document.querySelector('#submitBtn')

listOfTextbox[0].focus();
for(let i=0; i < listOfTextbox.length-1; i++)
{
    listOfTextbox[i].addEventListener('input',function() {
        listOfTextbox[i+1].focus();
    })
}

listOfTextbox[0].addEventListener('paste',(event)=>{
    let pasteData = (event.clipboardData || window.clipboardData).getData('text');
    pasteData = pasteData.split('');
    for(let i=0; i < listOfTextbox.length; i++)
    {
        listOfTextbox[i].value=pasteData[i];
    }
    document.activeElement.blur(); //remove focus
    setInterval(()=>{ //auto submit after 1 sec
        location.reload();
    },1000)
})

sbmtBtn.addEventListener('click',()=> {
    location.reload();
})

listOfTextbox[listOfTextbox.length-1].addEventListener('input',function() {
    let isFilled = true;
    for(let i=0; i < listOfTextbox.length; i++)
    {
        if(!listOfTextbox[i].value)
            isFilled = false;
    }
    if(isFilled)
    {
        setInterval(()=>{
            location.reload(); //auto submit after 1 sec
        },1000)
    }
})