function handleClick(event) {
    console.log(event.keyCode);
    switch (event.keyCode) {
        case 32: //space
            document.querySelector('#boom').cloneNode(true).play()
            document.querySelector('#Space').style.backgroundColor = "blue";
            setTimeout(() => {
                document.querySelector('#Space').style.backgroundColor = "";
            }, 100);
            break;
        case 65: //a
            document.querySelector('#kick').cloneNode(true).play()
            document.querySelector('#A').style.backgroundColor = "blue";
            setTimeout(() => {
                document.querySelector('#A').style.backgroundColor = "";
            }, 100);
            break;
        case 83: //s
            document.querySelector('#clap').cloneNode(true).play()
            document.querySelector('#S').style.backgroundColor = "blue";
            setTimeout(() => {
                document.querySelector('#S').style.backgroundColor = "";
            }, 100);
            break;
        case 68: //d
            document.querySelector('#hitat').cloneNode(true).play()
            document.querySelector('#D').style.backgroundColor = "blue";
            setTimeout(() => {
                document.querySelector('#D').style.backgroundColor = "";
            }, 100);
            break;
        case 70: //f
            document.querySelector('#openhat').cloneNode(true).play()
            document.querySelector('#F').style.backgroundColor = "blue";
            setTimeout(() => {
                document.querySelector('#F').style.backgroundColor = "";
            }, 100);
            break;
        case 72: //h
            document.querySelector('#ride').cloneNode(true).play()
            document.querySelector('#H').style.backgroundColor = "blue";
            setTimeout(() => {
                document.querySelector('#H').style.backgroundColor = "";
            }, 100);
            break;
        case 74: //j
            document.querySelector('#snare').cloneNode(true).play()
            document.querySelector('#J').style.backgroundColor = "blue";
            setTimeout(() => {
                document.querySelector('#J').style.backgroundColor = "";
            }, 100);
            break;
        case 75: //k
            document.querySelector('#tink').cloneNode(true).play()
            document.querySelector('#K').style.backgroundColor = "blue";
            setTimeout(() => {
                document.querySelector('#K').style.backgroundColor = "";
            }, 100);
            break;
        case 76: //L
            document.querySelector('#tom').cloneNode(true).play()
            document.querySelector('#L').style.backgroundColor = "blue";
            setTimeout(() => {
                document.querySelector('#L').style.backgroundColor = "";
            }, 100);
            break;
    
    }
}
window.onload = function() {
    window.addEventListener('keydown',handleClick);
}