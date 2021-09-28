const submit = document.querySelector('input[type=submit]')
const text = document.querySelector('input[type=text]')
const div = document.querySelector("div")
submit.addEventListener('click', () => {
    if (div.children[div.children.length - 1].tagName === "P")
        div.lastChild.remove();
    console.log(parseInt(text.value));
    if (parseFloat(text.value) > 18)
        create("good")
    else if (parseFloat(text.value) == text.value)
        create("no")
})
function create(str) {
    const create = document.createElement("p")
    if (str === "good") {
        create.innerText = "you can drink"
        create.style.color = "green"
    }
    else {
        create.innerText = "you cant drink"
        create.style.color = "red"
    }
    div.appendChild(create)
}