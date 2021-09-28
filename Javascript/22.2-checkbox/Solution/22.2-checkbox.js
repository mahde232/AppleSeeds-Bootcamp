const check = document.querySelector("#check")
const img = document.querySelector("img")
document.body.style.display = "flex"
document.body.style.alignItems = "center"
document.body.style.flexDirection = "column"
check.addEventListener("click", e => {
    if (check.checked)
        img.style.display = "none"
    else img.style.display = "unset"
})