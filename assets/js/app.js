/**
 * 
 * $n this file app.js you will find all CRUD functions name.
 *
 */

xx = 0;
let to = document.getElementById("to-do-tasks");
let Po = document.getElementById("in-progress-tasks");
let Do = document.getElementById("done-tasks");

let buttonSave = document.getElementById("buttonSave");
let buttonEdit = document.getElementById("buttonEdit");
let buttonDelete = document.getElementById("buttonDelete");

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

    } else if (tasks[i].status == "Done") {
  
      Do.innerHTML += ` <button class="p-3 border-0  border-bottom border-white mt-2 color-trans col-12" onclick="editTask(${i})" data-bs-toggle="modal" data-bs-target="#modal-task">
      <div class="">
          <i class=""></i>
      </div>
      <div class="text-start">
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
  const date= document.getElementById("Date").value;   
  const descrip= document.getElementById("message-text").value;   

  let task={
    'title' : inputTitle,
    'type'  : typeTask,
    'priority' : selectPriority,
    'status' : selectStatus,
    'date' : date,
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
  buttonDelete.style.display = 'block';

  const inputTitle = document.getElementById("recipient-name"); 
  const feature= document.getElementById("flexRadioDefault1"); 
  const bug= document.getElementById("flexRadioDefault2"); 
  const selectPriority= document.getElementById("Priority");   
  const selectStatus= document.getElementById("Status");   
  const data= document.getElementById("Date");   
  const descrip= document.getElementById("message-text"); 

  inputTitle.value = tasks[i].title;

  if(tasks[i].type == "Feature"){
    feature.checked = true ;
  }else {
    bug.checked = true ;
  }
  selectPriority.value= tasks[i].priority;
  selectStatus.value= tasks[i].status;
  data.value= tasks[i].date;
  descrip.value= tasks[i].description;
 
  buttonEdit.onclick=() => {
    updateTask(i);
  };
  buttonDelete.onclick=() => {
    deleteTask(i);
    
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
    'date' : data,
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

  const inputTitle = document.getElementById("recipient-name"); 
  const selectPriority= document.getElementById("Priority");    
  const selectStatus= document.getElementById("Status");   
  const data= document.getElementById("Date");   
  const descrip= document.getElementById("message-text");  

  inputTitle.value= "" 
  selectPriority.value = "" 
  selectStatus.value = "" 
  data.value = "" 
  descrip.value = "" 

  buttonSave.style.display = 'block';
  buttonDelete.style.display = 'none';
  buttonEdit.style.display = 'none';
}
