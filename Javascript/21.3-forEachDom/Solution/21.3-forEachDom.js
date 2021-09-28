const users = [
    {
        id: 167464,
        firstName: "Jimmy",
        lastName: "Arnold",
        email: "jimmya@gmail.com",
    },
    {
        id: 578447,
        firstName: "Martha",
        lastName: "Goldman",
        email: "gold@hotmail.com",
    },
    {
        id: 864578,
        firstName: "Tim",
        lastName: "Burton",
        email: "timmy.hotmail.com",
    },
];

let ul = document.createElement('ul');
document.body.appendChild(ul)

users.forEach(item => {
    let li = document.createElement(`li`);
    li.innerText = item.firstName + " " + item.lastName;
    li.setAttribute(`data-id`,item.id);
    ul.appendChild(li);
});

ul.style.listStyle = `none`;