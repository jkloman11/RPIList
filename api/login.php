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
    if (isset($_POST["email"])) {

        $email = trim($_POST["email"]);
        $password = trim($_POST["password"]);    

        $select_query = "select * from users where email= '$email'";
        $result = $db->query($select_query);
        if ($result->num_rows == 0) {
            echo "Invalid Username or Password.";
        } else {
            $record = $result->fetch_assoc();
            if($record['password'] == $password) {
                echo "Success";
            } else {
                echo "Invalid Username or Password.";
            }
        }

        $db->close();
    }
  }
?>