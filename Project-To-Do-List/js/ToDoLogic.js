//ToDo:
//add date of creation for tasks.
//input validations
//fix overfrom on title + descriptions

//class declarations
class Task {
    constructor(id, title, description, deadLine, active=true) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.createTime = Date.now();
        this.deadLine = deadLine;
        this.isActive = active;
    }
    getID() { return this.id; }
    setTitle(newTitle) { this.title = newTitle; }
    getTitle() { return this.title; }
    setDescription(newDesc) { this.description = newDesc; }
    getDescription() { return this.description; }
    setDeadline(newTime) { this.deadLine = newTime; }
    getDeadline() { return this.deadLine; }
    setIsActive(value) { this.isActive = value; }
    getIsActive() { return this.isActive; }
}
class ToDoList {
    constructor(obj = null) {
        if (obj === null) {
            this.arrayOfTasks = [];
            this.taskIDs = 0;
        }
        else {
            this.taskIDs = 0;
            this.arrayOfTasks = [];
            let tempArr = [];
            obj.arrayOfTasks.forEach(element => {
                this.arrayOfTasks.push(new Task(this.taskIDs++, element.title, element.description, element.deadLine,element.isActive))
            })

            this.taskIDs = obj.taskIDs;
        }
    }
    addTask(taskTitle, taskDesc, taskDeadline) {
        let newTask = new Task(this.taskIDs++, taskTitle, taskDesc, taskDeadline)
        this.arrayOfTasks.push(newTask);
        pushIntoLocalStorage();
        return newTask; //for debug purposes
    }
    deleteTask(taskToDelete) {
        this.arrayOfTasks = this.arrayOfTasks.filter(task => {
            if (task.id != taskToDelete) {
                return true;
            }
            return false;
        })
        pushIntoLocalStorage();
    }
    editTask(idOfTaskToEdit, newTask) {
        let taskToFind = this.arrayOfTasks.find(task => {
            if(task.getID() == idOfTaskToEdit)
                return true; //we want this task
        })
        taskToFind.setTitle(newTask.getTitle());
        taskToFind.setDescription(newTask.getDescription())
        taskToFind.setDeadline(newTask.getDeadline())
        taskToFind.setIsActive(newTask.getIsActive())
    }
    getTaskByID(idOfTask) { return this.arrayOfTasks.find(task => task.getID() == idOfTask) }
    getTaskIDs() { return this.taskIDs; }
    setTaskIDs(newTaskIDs) { this.taskIDs = newTaskIDs; }
    getAllTasks() { return this.arrayOfTasks }
    statusChangeTask(taskID) {
        this.arrayOfTasks.forEach(task => {
            if(task.getID() == taskID)
            {
                if(task.getIsActive())
                    task.setIsActive(false);
                else
                    task.setIsActive(true);
            }
        })
    }
}

//Global Parameters
let toDoList, taskToEdit;

//Functions
function createTaskHtml(task) {
    let str = `<div class="task">`
    if(task.getIsActive() == true)
        str+= `<div class="taskTitle"><i class="far status ${task.getID()} fa-square"></i><h3>${task.getTitle()}</h3></div>`;
    else
        str+= `<div class="taskTitle"><i class="far status ${task.getID()} fa-check-square"></i><h3>${task.getTitle()}</h3></div>`;
    str += `<div><span class="taskDescription">Description: ${task.getDescription()}</span></div>`
    str += `<div><span class='taskDeadline'>Deadline: ${task.getDeadline()}</span></div>`
    str += `<div class='taskControls'><i class="fas fa-edit edit ${task.getID()} fa-sm"></i><i class="fas fa-trash-alt delete ${task.getID()} fa-sm"></i></div>`
    str += '</div>';
    return str;
}
function createListHtml() {
    let str = '';
    if (toDoList.getAllTasks().length > 0) {
        toDoList.getAllTasks().forEach(task => {
            str += createTaskHtml(task);
        });
        document.querySelector("#toDoListContainer").innerHTML = str;
        document.querySelectorAll('.status').forEach(btn => { //status change handlers
            btn.addEventListener('click', handleStatusChange);
        })
        document.querySelectorAll('.edit').forEach(btn => { //editing handlers
            btn.addEventListener('click', handleEdit);
        })
        document.querySelectorAll('.delete').forEach(btn => { //deleting handlers
            btn.addEventListener('click', handleDelete);
        })
    }
    else
        document.querySelector("#toDoListContainer").innerHTML = 'Your to-do list is empty';
}
function handleStatusChange(event) {
    switch (event.target.classList[3]) {
        case 'fa-square':
            event.target.classList.remove('fa-square');
            event.target.classList.add('fa-check-square');
            break;
        case 'fa-check-square':
            event.target.classList.remove('fa-check-square');
            event.target.classList.add('fa-square');
            break;
    }
    toDoList.statusChangeTask(event.target.classList[2])
    pushIntoLocalStorage();
}
function handleEdit(event) {
    if(document.querySelector('#createTaskForm').style.visibility == 'visible')
        document.querySelector('#createTaskForm').style.visibility = 'hidden';
    taskToEdit = toDoList.getTaskByID(event.target.classList[3])
    document.querySelector("#editTaskForm").style.visibility = 'visible';
    document.querySelector('#editTitleInput').value = taskToEdit.getTitle()
    document.querySelector('#editDescriptionInput').value = taskToEdit.getDescription();
    document.querySelector('#editDeadlineInput').value = taskToEdit.getDeadline();
    document.querySelector("#editDeadlineInput").min = taskToEdit.getDeadline();

    //remove old event listeners, it was doing a problem.
    let oldBtn = document.querySelector('#editConfirm'), newBtn = oldBtn.cloneNode(true);
    oldBtn.parentNode.replaceChild(newBtn,oldBtn)

    document.querySelector('#editConfirm').addEventListener('click', function() {
        let newTask = new Task(9999999,document.querySelector('#editTitleInput').value,document.querySelector('#editDescriptionInput').value,document.querySelector('#editDeadlineInput').value,true)
        toDoList.editTask(event.target.classList[3],newTask)
        pushIntoLocalStorage();
        createListHtml();
        document.querySelector("#editTaskForm").style.visibility = 'hidden';
    })
}
function handleDelete(event) {
    toDoList.deleteTask(event.target.classList[3]);
    createListHtml();
}

//Useful small functions
function pullFromLocalStorage() {
    if (window.localStorage.getItem('toDoListObject')) {
        tempData = JSON.parse(window.localStorage.getItem('toDoListObject'));
        toDoList = new ToDoList(tempData);
    }
    else
        console.log('Error occured while pulling tasks from local storage, might be empty');
}
function pushIntoLocalStorage() {
    window.localStorage.setItem('toDoListObject', JSON.stringify(toDoList))
}
function resetInputFields() {
    document.querySelector("#taskTitleInput").value = '';
    document.querySelector("#taskDescriptionInput").value = '';
    document.querySelector("#taskDeadlineInput").value = '';
}
// Event Listeners
document.querySelector("#showTasksBtn").addEventListener('click', function () {
    document.querySelector('#editTaskForm').style.visibility = 'hidden';
    document.querySelector('#createTaskForm').style.visibility = 'hidden';
    createListHtml();
})
document.querySelector("#createTaskBtn").addEventListener('click', function () {
    if(document.querySelector('#editTaskForm').style.visibility == 'visible')
        document.querySelector('#editTaskForm').style.visibility = 'hidden';
    let now = new Date(), utcString = now.toISOString().substring(0, 19),
    year = now.getFullYear(),
    month = now.getMonth() + 1,
    day = now.getDate(),
    hour = now.getHours(),
    minute = now.getMinutes(),
    localDatetime = year + "-" +
        (month < 10 ? "0" + month.toString() : month) + "-" +
        (day < 10 ? "0" + day.toString() : day) + "T" +
        (hour < 10 ? "0" + hour.toString() : hour) + ":" +
        (minute < 10 ? "0" + minute.toString() : minute) +
        utcString.substring(16, 19);
    document.querySelector("#taskDeadlineInput").value = localDatetime;
    document.querySelector("#taskDeadlineInput").min = localDatetime;
    document.querySelector("#createTaskForm").style.visibility = 'visible';
})
document.querySelector("#taskCreateConfirm").addEventListener('click', function () {
    toDoList.addTask(document.querySelector("#taskTitleInput").value,
        document.querySelector("#taskDescriptionInput").value, document.querySelector("#taskDeadlineInput").value);
    resetInputFields();
    document.querySelector("#createTaskForm").style.visibility = 'hidden';
    setTimeout(() => {
        createListHtml();
    }, 200);
})
window.onload = function () {
    toDoList = new ToDoList();
    pullFromLocalStorage();
    createListHtml();
    document.querySelector('#closeCreate').addEventListener('click',function (){
        document.querySelector('#createTaskForm').style.visibility = 'hidden';
    })
    document.querySelector('#closeEdit').addEventListener('click',function (){
        document.querySelector('#editTaskForm').style.visibility = 'hidden';
    })
}