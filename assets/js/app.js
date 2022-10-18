/**
 * In this file app.js you will find all CRUD functions name.
 * 
 */

// import {tasks} from "./data.js";

console.log(tasks);

for (let i=0 ; i<tasks.length ;i++)
{
    console.log(tasks[i]);
}

// function  add (){
//     let obj = 
//     'title': title.value,
//     'type' : check(),
//     'priodr' : priority.value,
// }

// function check(){
//     let ck;
//     for(var i=0 ; i <type.length;i++){
//         if(type[i].checked){
//             ck=type[i].value;
//         }
//     }
//     return ck;
// }




function createTask() {
    // initialiser task form

    // Afficher le boutton save

    // Ouvrir modal form
    
}

function saveTask() {
    // Recuperer task attributes a partir les champs input

    // Créez task object

    // Ajoutez object au Array

    // refresh tasks
    
}

function editTask(index) {
    // Initialisez task form

    // Affichez updates

    // Delete Button

    // Définir l’index en entrée cachée pour l’utiliser en Update et Delete

    // Definir FORM INPUTS

    // Ouvrir Modal form
}

function updateTask() {
    // GET TASK ATTRIBUTES FROM INPUTS

    // Créez task object

    // Remplacer ancienne task par nouvelle task

    // Fermer Modal form

    // Refresh tasks
    
}

function deleteTask() {
    // Get index of task in the array

    // Remove task from array by index splice function

    // close modal form

    // refresh tasks
}

function initTaskForm() {
    // Clear task form from data

    // Hide all action buttons
}

function reloadTasks() {
    // Remove tasks elements

    // Set Task count
}