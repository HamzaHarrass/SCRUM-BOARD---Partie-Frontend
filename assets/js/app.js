/**
 * In this file app.js you will find all CRUD functions name.
 *
 */

// import {tasks} from "./data.js";

xx = 0;
let to = document.getElementById("to-do-tasks");
console.log(to);
let Po = document.getElementById("in-progress-tasks");
console.log(Po);
let Do = document.getElementById("done-tasks");
console.log(Do);

console.log(tasks);

for (let i = 0; i < tasks.length; i++) {
  xx = i + 1; 
  if (tasks[i].status == "To Do") {
   
    to.innerHTML += `
            <button class="p-3 border-0  border-bottom border-white mt-2 color-trans col-12">
            <div class="">
            </div>
            <div class="text-start ">
                <div class="text-white  "><i
                        class="bi bi-question-circle-fill text-success me-2"></i>${tasks[i].title}</div>
                <div class="">
                    <div class="text-white ms-4">#${xx} created in ${tasks[i].date}</div>
                    <div class=" text-white ms-4"
                        title="">${tasks[i].description}</div>
                </div>
            </div>
            <div class="mt-2 ms-4 text-start">
                <span class="hight p-1 me-2">${tasks[i].priority}</span>
                <span class="feature p-1 ">${tasks[i].type}</span>
            </div>
        </button>  `;
        
  } else if (tasks[i].status == "In Progress") {
    Po.innerHTML += ` <button class="p-3 border-0  border-bottom border-white mt-2 color-trans col-12">
    <div class="">
        <i class=""></i>
    </div>
    <div class="text-start">
        <div class="text-white "><i
                class="spinner-border  spinner-border-sm  text-success me-2"></i>${tasks[i].title}</div>
        <div class="">
            <div class="text-white ms-4">#${xx} created in ${tasks[i].date}</div>
            <div class="text-white ms-4" title="">${tasks[i].description}</div>
        </div>
        <div class="mt-2 ms-4 text-start">
            <span class="hight p-1 me-2 ">${tasks[i].priority}</span>
            <span class="feature p-1">${tasks[i].type}</span>
        </div>
    </div>
</button> `;
  } else if (tasks[i].status == "Done") {

    Do.innerHTML += ` <button class="p-3 border-0  border-bottom border-white mt-2 color-trans col-12">
    <div class="">
        <i class=""></i>
    </div>
    <div class="text-start">
        <div class="text-white "><i
                class="bi bi-check-circle text-success me-2"></i>${tasks[i].title}</div>
        <div class="">
            <div class="text-white ms-4">#${xx} created in ${tasks[i].date}</div>
            <div class="text-white ms-4" title="">${tasks[i].description}</div>
        </div>
        <div class="mt-2 ms-4 text-start">
            <span class="hight p-1 me-2 ">${tasks[i].priority}</span>
            <span class="feature p-1">${tasks[i].type}</span>
        </div>
    </div>
</button> `;
  }
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
