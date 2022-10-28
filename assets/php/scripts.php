<?php
    //INCLUDE DATABASE FILE
    include('database.php');
    //SESSSION IS A WAY TO STORE DATA TO BE USED ACROSS MULTIPLE PAGES
    session_start();

    //ROUTING
    if(isset($_POST['save']))        saveTask();
    if(isset($_POST['update']))      updateTask();
    if(isset($_POST['delete']))      deleteTask();
    

    function getTasks($status)
    {
        //CODE HERE
        //SQL SELECT

    $sql = "select tasks.id , tasks.title , tasks.task_datetime , tasks.description , priorities.name AS prioritie , 
    statuses.name AS status , types.name AS type
     from tasks
      inner join priorities ON tasks.priority_id = priorities.id
      inner join statuses ON tasks.status_id = statuses.id 
      inner join types ON tasks.type_id = types.id
      WHERE tasks.status_id = $status  ";
        global $link ;

        $res = mysqli_query($link,$sql);
        if(mysqli_num_rows($res) > 0){
            //
            while($row = mysqli_fetch_assoc($res)){
                    echo'
                    <button class="p-3 border-0  border-bottom border-white mt-2 color-trans col-12"  data-bs-toggle="modal" data-bs-target="#modal-task">
							<div class="">
								<i class=""></i>
							</div>                         
							<div class="text-start">
								<div class="text-white "><i
										class="spinner-border  spinner-border-sm  text-success me-2"></i>'.$row["title"].'</div>
								<div class="">
									<div class="text-white ms-4">'.$row["id"].' created in '.$row["task_datetime"].'</div>
									<div class="text-white ms-4" id="pargraph" title="">'.$row["description"].'...</div>
								</div>
								<div class="mt-2 ms-4 text-start">
									<span class="hight p-1 me-2 ">'.$row["type"].'</span>
									<span class="feature p-1">'.$row["prioritie"].'</span>
								</div>
							</div>
						</button>:
                    ';
            }
        }
    }

    function saveTask()
    {
        //CODE HERE
        //SQL INSERT
        global $link;
     if(isset($_POST['save'])){
        $title= $_POST['title'];
        $mode= $_POST['flexRadioDefault'];
        $priority= $_POST['priority_id'];
        $statu= $_POST['statues_id'];
        $date= $_POST['date'];
        $description= $_POST['descpription'];
        $query=mysqli_query($link,"INSERT INTO `tasks`(`id`, `title`, `type_id`, `priority_id`, `status_id`, `task_datetime`, `description`) VALUES ('','$title','$mode','$priority','$statu','$date','$description')");
        if($query) header("location:../../index.php");
        if(!$query) echo "not created";
     }
    }

    function updateTask()
    {
        //CODE HERE
        //SQL UPDATE
        $_SESSION['message'] = "Task has been updated successfully !";
		header('location: index.php');
    }

    function deleteTask()
    {
        //CODE HERE
        //SQL DELETE
        $_SESSION['message'] = "Task has been deleted successfully !";
		header('location: index.php');
    }

?>