/**
 * 
 * $n this file app.js you will find all CRUD functions name.
 *
 */

xx = 0;
let to = document.getElementById("to-do-tasks");
console.log(to);
let Po = document.getElementById("in-progress-tasks");
console.log(Po);
let Do = document.getElementById("done-tasks");
console.log(Do);

let buttonSave = document.getElementById("buttonSave");
let buttonEdit = document.getElementById("buttonEdit");

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
              <button class="p-3 border-0  border-bottom border-white mt-2 color-trans col-12" onclick="editTask(${i})" data-bs-toggle="modal" data-bs-target="#modal-task">
              <div class="">
              </div>
              <div class="text-start">
              <i class="bi bi-x text-white me-5" onclick="deleteTask(${i})"></i>
                  <div class="text-white  "><i
                          class="bi bi-question-circle-fill text-success me-2"></i>${tasks[i].title}</div>
                  <div class="">
                      <div class="text-white  ms-4">#${xx} created in ${tasks[i].date}</div>
                      <div class=" text-white ms-4" id="pargraph"
                          title="${tasks[i].description}">${tasks[i].description.slice(0,70)}...</div>
                  </div>
              </div>
              <div class="mt-2 ms-4 text-start">
                  <span class="hight p-1 me-2">${tasks[i].priority}</span>
                  <span class="feature p-1 ">${tasks[i].type}</span>
              </div>
          </button>  `;
          todon++;
          
    } else if (tasks[i].status == "In Progress") {
      Po.innerHTML += ` <button class="p-3 border-0  border-bottom border-white mt-2 color-trans col-12" onclick="editTask(${i})" data-bs-toggle="modal" data-bs-target="#modal-task">
      <div class="">
          <i class=""></i>
      </div>
      <div class="text-start">
            <i class="bi bi-x text-white" onclick="deleteTask(${i})"></i>
          <div class="text-white "><i
                  class="spinner-border  spinner-border-sm  text-success me-2"></i>${tasks[i].title}</div>
          <div class="">
              <div class="text-white ms-4">#${xx} created in ${tasks[i].date}</div>
              <div class="text-white ms-4" id="pargraph" title="${tasks[i].description}">${tasks[i].description.slice(0,70)}...</div>
            
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
  
      Do.innerHTML += ` <button class="p-3 border-0  border-bottom border-white mt-2 color-trans col-12" onclick="editTask(${i})" data-bs-toggle="modal" data-bs-target="#modal-task">
      <div class="">
          <i class=""></i>
      </div>
      <div class="text-start">
      <i class="bi bi-x text-white" onclick="deleteTask(${i})"></i>
          <div class="text-white " id="buttonTitle"><i
                  class="bi bi-check-circle text-success me-2" ></i>${tasks[i].title}</div>
          <div class="">
              <div class="text-white ms-4">#${xx} created in <div id="buttonDate">${tasks[i].date}</div></div>
              <div class="text-white ms-4" id="buttonDescription" title="${tasks[i].description}">${tasks[i].description.slice(0,70)}...</div>

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

function createTask() {
  // initialiser task form
  // Afficher le boutton save
  // Ouvrir modal form
  const inputTitle = document.getElementById("recipient-name").value; 
  const typeTask= document.querySelector("input[name='flexRadioDefault']:checked").value;   
  const selectPriority= document.getElementById("Priority").value;   
  const selectStatus= document.getElementById("Status").value;   
  const data= document.getElementById("Date").value;   
  const descrip= document.getElementById("message-text").value;   

  let task={
    'title' : inputTitle,
    'type'  : typeTask,
    'priority' : selectPriority,
    'status' : selectStatus,
    'data' : data,
    "description" : descrip
  }
tasks.push(task);
console.log(tasks);
console.log(task);
$("#modal-task").modal('hide');

   
afficher();
}

function editTask(i) {
  buttonSave.style.display = 'none';
  buttonEdit.style.display = 'block';

  
  console.log(tasks[i]);
 
  const inputTitle = document.getElementById("recipient-name"); 
  const typeTask= document.querySelector("input[name='flexRadioDefault']:checked");   
  const selectPriority= document.getElementById("Priority");   
  const selectStatus= document.getElementById("Status");   
  const data= document.getElementById("Date");   
  const descrip= document.getElementById("message-text"); 

  inputTitle.value = tasks[i].title;
  typeTask.value= tasks[i].type;
  selectPriority.value= tasks[i].priority;
  selectStatus.value= tasks[i].status;
  data.value= tasks[i].date;
  descrip.value= tasks[i].description;
 
  buttonEdit.onclick=() => {
    updateTask(i);
  };

}

function updateTask(i) {
  const inputTitle = document.getElementById("recipient-name").value; 
  const typeTask= document.querySelector("input[name='flexRadioDefault']:checked").value;   
  const selectPriority= document.getElementById("Priority").value;   
  const selectStatus= document.getElementById("Status").value;   
  const data= document.getElementById("Date").value;   
  const descrip= document.getElementById("message-text").value; 

  let Task={
    'title' : inputTitle,
    'type'  : typeTask,
    'priority' : selectPriority,
    'status' : selectStatus,
    'data' : data,
    "description" : descrip
  }
  tasks.splice(i,1,Task);
  console.log(Task);
  afficher();
}

function deleteTask(i) {
  tasks.splice(i,1);
  afficher();
}

function popupAddTask(){
  buttonSave.style.display = 'block';
  buttonEdit.style.display = 'none';
}
