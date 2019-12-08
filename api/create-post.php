<?php
    session_start();
    @ $db = new mysqli('localhost', 'root', 'password', 'rpilist');
  
    if ($db->connect_error) {
        $connectErrors = array(
        'errors' => true,
        'errno' => mysqli_connect_errno(),
        'error' => mysqli_connect_error()
        );
        echo json_encode($connectErrors);
    } else {
    
    if (isset($_POST["title"])) {
        
        $user_id = (int)$_SESSION['user_id'];
        $title = trim($_POST["title"]);  
        $date = $_POST["date"];
        $time = trim($_POST["time"]);
        $pay = trim($_POST["compensation"]);
        $description = trim($_POST["description"]);    

        
        $sql = "INSERT INTO posts (`user_id`, `title`, `date`, `time`, `pay`, `description`)
                VALUES ($user_id, '$title', '$date', '$time', '$pay', '$description')";

        if ($db->query($sql) === TRUE) {
            echo "Success";
        } else {
            echo "Error: " . $sql . "<br>" . $db->error;
        }
        

        $db->close();
    }
  }
?>