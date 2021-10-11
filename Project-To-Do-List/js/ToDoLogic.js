//class declarations
class Task {
    // //object fields
    // id;
    // title;
    // description;
    // createTime;
    // deadLine;
    constructor(id, title, description, deadLine, active) {
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
    // //object fields
    // arrayOfTasks;
    // taskIDs;
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
        console.log('list before =', toDoList);
        this.arrayOfTasks = this.arrayOfTasks.filter(task => {
            if (task.id != taskToDelete) {
                return true;
            }
            return false;
        })
        console.log('list after =', toDoList);
        pushIntoLocalStorage();
    }
    editTask(idOfTaskToEdit, newTask) {
        let taskToFind = this.arrayOfTasks.find(task => task.getID === idOfTaskToEdit)
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
        console.log(this.getTaskByID(taskID));

        this.arrayOfTasks.forEach(task => {
            if(task.getID() == taskID)
            {
                if(task.getIsActive())
                    task.setIsActive(false);
                else
                    task.setIsActive(true);
            }
        })

        console.log(`changed status from ${!this.getTaskByID(taskID).getIsActive()} to ${this.getTaskByID(taskID).getIsActive()}`);
    }
}

//Global Parameters
let toDoList;

//Functions
function createTaskHtml(task) {
    let str = `<div class="task">`
    console.log('task details=',task.getIsActive());
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
    console.log(toDoList);
}
function handleEdit(event) {
    console.log(`edit task id=`, event.target.classList[3]);
}
function handleDelete(event) {
    console.log(`delete task id=`, event.target.classList[3]);
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
    createListHtml();
})
document.querySelector("#createTaskBtn").addEventListener('click', function () {
    let now = new Date();
    let utcString = now.toISOString().substring(0, 19);
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();
    let hour = now.getHours();
    let minute = now.getMinutes();
    // let second = now.getSeconds();
    let localDatetime = year + "-" +
        (month < 10 ? "0" + month.toString() : month) + "-" +
        (day < 10 ? "0" + day.toString() : day) + "T" +
        (hour < 10 ? "0" + hour.toString() : hour) + ":" +
        (minute < 10 ? "0" + minute.toString() : minute) +
        utcString.substring(16, 19);
    document.getElementById("taskDeadlineInput").value = localDatetime;
    document.querySelector("#createTaskForm").style.visibility = 'visible';
})
document.querySelector("#taskCreateConfirm").addEventListener('click', function () {
    let temp = toDoList.addTask(document.querySelector("#taskTitleInput").value,
        document.querySelector("#taskDescriptionInput").value, document.querySelector("#taskDeadlineInput").value);
    console.log('task created=', temp);
    resetInputFields();
    document.querySelector("#createTaskForm").style.visibility = 'hidden';
    setTimeout(() => {
        // alert('task added');
        createListHtml();
    }, 200);
})
window.onload = function () {
    toDoList = new ToDoList();
    pullFromLocalStorage();
    console.log('toDoList=', toDoList);
    createListHtml();
}