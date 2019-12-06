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
    if (isset($_POST["firstName"])) {
        
        $firstName = trim($_POST["firstName"]);  
        $lastName = trim($_POST["lastName"]);
        $email = trim($_POST["email"]);
        $password = trim($_POST["password"]);    

        $select_query = "select * from users where email= '$email'";
        $result = $db->query($select_query);
        if ($result->num_rows == 0) {
            $sql = "INSERT INTO users (`first_name`, `last_name`, `email`, `password`)
                VALUES ('$firstName', '$lastName', '$email', '$password')";

            if ($db->query($sql) === TRUE) {
                echo "Account Successfully Created";
            } else {
                echo "Error: " . $sql . "<br>" . $db->error;
            }
        } else {
            echo "This email is in use.";
        }

        $db->close();
    }
  }
?>