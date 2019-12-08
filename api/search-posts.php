<?php
  @ $db = new mysqli('localhost', 'root', 'password', 'rpilist');
  
  if ($db->connect_error) {
    $connectErrors = array(
      'errors' => true,
      'errno' => mysqli_connect_errno(),
      'error' => mysqli_connect_error()
    );
    echo json_encode($connectErrors);
  } else {
    if (isset($_POST["query"])) {
        
        $val = trim($_POST["query"]);

        $select_query = "select * from posts where 
            title like '%". $val . "%' or
            date like '%". $val . "%' or
            time like '%". $val . "%' or
            pay like '%". $val . "%' or
            description like '%". $val . "%'";

        $result = $db->query($select_query);
        // echo print_r($result);
        $resultArray = $result->fetch_all(MYSQLI_ASSOC);
        
        echo json_encode($resultArray);
    
        $db->close();
    }
  }
?>