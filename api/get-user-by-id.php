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
    
        
    $select_query = "select * from users where id = " . $_SESSION["user_id"];
    $result = $db->query($select_query);
    $resultArray = $result->fetch_all(MYSQLI_ASSOC);
    
    echo json_encode($resultArray);
    $db->close();

  }
?>