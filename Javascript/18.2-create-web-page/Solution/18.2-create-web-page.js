const newDiv = document.createElement('div');
const newDiv2 = document.createElement('div');
const newContent = document.createTextNode('Hi there, this msg is created using javascript!')

newDiv.appendChild(newContent);
newDiv2.innerHTML = smileyHtmlCode();
document.body.appendChild(newDiv);
document.body.append(newDiv2);


function smileyHtmlCode() {
    return `<img src="smiley.jpg" alt="" style="width: 100px; height: 100px; display: inline-block;"> `;
}