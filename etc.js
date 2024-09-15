// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));


// Todo: create a function to generate a unique task id
function generateTaskId() {
    return taskList.length;
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    // Create a new div element
    var newDiv = $("<div>");
    $newDiv.attr('id', 'draggable');
    $newDiv.attr('class', 'ui-draggable');
    $newDiv.text(task.content);

    task.title;
    task.dueDate;
    task.description;

    return newDiv;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
   

    // let fruits = ["apple", "banana", "cherry"];

    // fruits.forEach(function(fruit, index, array) {
    //     console.log(`Fruit at index ${index} is ${fruit}`);
    //     console.log(`I'm in this array: `, array);
    // });
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    // render the task list
    renderTaskList();
    
});
