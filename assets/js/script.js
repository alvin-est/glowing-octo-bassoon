// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

// Select HTML elements
const todo = $('#todo-cards'); // category
const inprogress = $('#in-progress'); // category
const done = $('#done'); // category
const addTask = $('#addTaskBtn'); // button

// Global scope variable
let taskIdCount = 0;

// Todo: create a function to generate a unique task id
function generateTaskId() {
    taskIdCount++;
    return taskIdCount;
}

// Todo: create a function to create a task card
function createTaskCard(task) {

    // Create list element
    const taskCard = $('<li>');

    // Add info
    taskCard.addClass('list-group-item');
    taskCard.addClass('task-card');
    taskCard.addClass('todo');
    taskCard.text(task);

    return taskCard;
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
   
    // Select one of the columns
    const categoryElement = $('#todo-cards');

    // Create element
    const taskList = $('<ul>');
    
    // Add class
    taskList.addClass('list-group');

    // Insert into column
    taskList.appendTo(categoryElement);

    // Make draggable/sortable
    $('.taskDiv').sortable({
        placeholder: 'ui-state-highlight',
    });
    
}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

    // Datepicker widget
    $('#deadline').datepicker({
        changeMonth: true,
        changeYear: true,
    });

    // Show modal
    $("#modal").dialog({width:333});

    // Push into array
    // alert("hello");

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

    // Remove from array

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {



}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    // render the task list
    renderTaskList();
    
    // Run function when Add Task button is clicked
    addTask.on('click', handleAddTask);


});
