const fullName = document.querySelector('#name');
const age = document.querySelector('#age');
const email = document.querySelector('#email');
const sbmtBtn = document.querySelector('#submitBtn');

const confirmationDiv = document.createElement('div');

const cName = document.createElement('div');
const cAge = document.createElement('div');
const cEmail = document.createElement('div');

confirmationDiv.style.position = 'absolute';
confirmationDiv.style.top = 0;
confirmationDiv.style.left = 0;
confirmationDiv.style.backgroundColor = "grey";
confirmationDiv.style.width = "250px";
confirmationDiv.style.height = "200px";
confirmationDiv.style.visibility = "hidden";

const confirmBtn = document.createElement('input');
confirmBtn.value = 'Confirm';
confirmBtn.type = 'button';
confirmBtn.style.marginTop = "10px";
confirmBtn.style.marginRight = "10px";
confirmBtn.addEventListener('click', () => {
    alert("confirmed");
    location.reload();
})

const modifyBtn = document.createElement('input');
modifyBtn.value = 'Modify';
modifyBtn.type = 'button';
modifyBtn.style.marginTop = "10px";
modifyBtn.style.marginRight = "10px";
modifyBtn.addEventListener('click', () => {
    confirmationDiv.style.visibility = 'hidden';
})

document.body.appendChild(confirmationDiv);
confirmationDiv.append(cName,cAge,cEmail,confirmBtn,modifyBtn);


sbmtBtn.addEventListener('click', () => {
    confirmationDiv.style.visibility = 'visible';
    console.log(fullName.value,age.value,email.value);
    cName.textContent = `Your name: ${fullName.value}`;
    cAge.textContent = `Your age: ${age.value}`;
    cEmail.textContent = `Your Email: ${email.value}`;
})