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

    $user_id = (int)$_SESSION['user_id'];
    $firstName = trim($_POST["firstName"]);  
    $lastName = trim($_POST["lastName"]);
    $phoneNum = trim($_POST["phone"]);
    $altEmail = trim($_POST["email2"]);
    
    $update_query = "update users set 
            first_name = '$firstName', 
            last_name = '$lastName', 
            phone_number = '$phoneNum',
            alt_email = '$altEmail'
        where 
            id = $user_id;";
    
    if ($db->query($update_query) === TRUE) {
        echo "Record updated successfully";
    } else {
        echo "Error updating record: " . $db->error;
    }

    
    $db->close();
  }
?>