<?php
   header('Access-Control-Allow-Origin: *');
   header("Content-Type: application/json;");
   header("Access-Control-Allow-Methods: *");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once './config.php';
    include_once './users.php';

    $database = new DB();
    $db = $database->getConnection();

    $user = new User($db);

    $data = json_decode(file_get_contents("php://input"));
    // print_r($data);
    $user->first_name = $data->firstName;
    $user->last_name = $data->lastName;
    $user->email = $data->email;
    $user->password = $data->password;
   
    if($user->createUser()){
        echo json_encode("User created.");
    } else{
        echo json_encode("Failed to create user.");
    }
?>