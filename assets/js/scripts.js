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