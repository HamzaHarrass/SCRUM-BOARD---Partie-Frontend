/**
 * 
 * $n this file app.js you will find all CRUD functions name.
 *
 */

// import {tasks} from "./data.js";

// var myModal = document.getElementById("modal-task") ;
// var backDrop = document.getElementsByClassName("modal-backdrop") ;


xx = 0;
let to = document.getElementById("to-do-tasks");
console.log(to);
let Po = document.getElementById("in-progress-tasks");
console.log(Po);
let Do = document.getElementById("done-tasks");
console.log(Do);

console.log(tasks);
afficher();


function afficher(){  

    todon=0;
    inprogressn=0;
    donetaskn=0;
    
    to.innerText = ""
    Po.innerText = ""
    Do.innerText = ""

  for (let i = 0; i < tasks.length; i++) {
    xx = i + 1; 


    if (tasks[i].status == "To Do") {
     
      to.innerHTML += `
              <button class="p-3 border-0  border-bottom border-white mt-2 color-trans col-12">
              <div class="">
              </div>
              <div class="text-start">
              <i class="bi bi-x text-white me-5" onclick="deleteTask(${i})"></i>
                  <div class="text-white  "><i
                          class="bi bi-question-circle-fill text-success me-2"></i>${tasks[i].title}</div>
                  <div class="">
                      <div class="text-white  ms-4">#${xx} created in ${tasks[i].date}</div>
                      <div class=" text-white ms-4" id="pargraph"
                          title="${tasks[i].description}">${tasks[i].description.slice(0,50)}...</div>
                  </div>
              </div>
              <div class="mt-2 ms-4 text-start">
                  <span class="hight p-1 me-2">${tasks[i].priority}</span>
                  <span class="feature p-1 ">${tasks[i].type}</span>
              </div>
          </button>  `;
          todon++;
          
    } else if (tasks[i].status == "In Progress") {
      Po.innerHTML += ` <button class="p-3 border-0  border-bottom border-white mt-2 color-trans col-12">
      <div class="">
          <i class=""></i>
      </div>
      <div class="text-start">
            <i class="bi bi-x text-white" onclick="deleteTask(${i})"></i>
          <div class="text-white "><i
                  class="spinner-border  spinner-border-sm  text-success me-2"></i>${tasks[i].title}</div>
          <div class="">
              <div class="text-white ms-4">#${xx} created in ${tasks[i].date}</div>
              <div class="text-white ms-4" id="pargraph" title="${tasks[i].description}">${tasks[i].description.slice(0,50)}...</div>
            
          </div>
          <div class="mt-2 ms-4 text-start">
              <span class="hight p-1 me-2 ">${tasks[i].priority}</span>
              <span class="feature p-1">${tasks[i].type}</span>
          </div>
      </div>
  </button> `; 
  inprogressn++;

   console.log(inprogressn);
    } else if (tasks[i].status == "Done") {
  
      Do.innerHTML += ` <button class="p-3 border-0  border-bottom border-white mt-2 color-trans col-12" onclick="editTask(this)">
      <div class="">
          <i class=""></i>
      </div>
      <div class="text-start">
      <i class="bi bi-x text-white" onclick="deleteTask(${i})"></i>
          <div class="text-white " id="buttonTitle"><i
                  class="bi bi-check-circle text-success me-2" ></i>${tasks[i].title}</div>
          <div class="">
              <div class="text-white ms-4">#${xx} created in <div id="buttonDate">${tasks[i].date}</div></div>
              <div class="text-white ms-4" id="buttonDescription" title="${tasks[i].description}">${tasks[i].description.slice(0,50)}...</div>

          </div>
          <div class="mt-2 ms-4 text-start">
              <span class="hight p-1 me-2 " id="buttonPriority">${tasks[i].priority}</span>
              <span class="feature p-1" id="buttonType">${tasks[i].type}</span>
          </div>
      </div>
  </button> `;
  donetaskn++
  console.log(donetaskn);
    }
  }
document.getElementById("to-do-tasks-count").innerHTML=todon;
let inprogres=document.getElementById("in-progress-tasks-count");
inprogres.innerHTML=inprogressn;
let donet=document.getElementById("done-tasks-count");
donet.innerHTML=donetaskn;
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
  const inputTitle = document.getElementById("recipient-name").value; 
  const typeTask= document.querySelector("input[name='flexRadioDefault']:checked").value;   
  const selectper= document.getElementById("Priority").value;   
  const selectsta= document.getElementById("Status").value;   
  const data= document.getElementById("Date").value;   
  const descrip= document.getElementById("message-text").value;   

  let task={
    'title' : inputTitle,
    'type'  : typeTask,
    'priority' : selectper,
    'status' : selectsta,
    'data' : data,
    "description" : descrip
  }
// console.log(task);
tasks.push(task);
console.log(tasks);
console.log(task);
$("#modal-task").modal('hide');
// Swal.fire(
//   'Good job!',
//   'You clicked the button!',
//   'success'
// )
// backDrop.remove() ;
// backDrop.style.display = "none" ;
// myModal.style.display = "none";
afficher();
}

function saveTask() {
  // Recuperer task attributes a partir les champs input
  // Créez task object
  // Ajoutez object au Array
  // refresh tasks
}

function editTask(element) {
  // Initialisez task form
  var buttonInfo = {
    title : element.querySelector("#buttonTitle").innerText,
    // type  : element.querySelector("input[name='flexRadioDefault']:checked").innerHTML,
    priority : element.querySelector("#buttonPriority").innerText,
    date : element.querySelector("#buttonDate").innerText,
    type : element.querySelector("#buttonType").innerText,
    description : element.querySelector("#buttonDescription").innerText,
    
  }
  console.log(buttonInfo.title);
  console.log(buttonInfo.date);
  console.log(buttonInfo.type);
  console.log(buttonInfo.priority);
  console.log(buttonInfo.description);
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

function deleteTask(i) {
  // Get index of task in the array
  tasks.splice(i,1);
  // Remove task from array by index splice function
  // close modal form
  // refresh tasks
  afficher();
}

function initTaskForm() {
  // Clear task form from data
  // Hide all action buttons
}
function reloadTasks() {
  // Remove tasks elements
  // Set Task count
}

