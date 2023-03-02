<?php
   header("Access-Control-Allow-Origin:*");
   header("Content-Type: application/json;");
   header("Access-Control-Allow-Methods: *");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../config.php';
    include_once './users.php';
    $database = new DB();
    $db = $database->getConnection();
    
    $data = json_decode(file_get_contents("php://input"));

    print_r($data);
    

    $sql = "UPDATE `users` SET `first_name`='$data->first_name',`last_name`='$data->last_name',`email`='$data->email',`about`='$data->about',`country`='$data->country',`city`='$data->city' WHERE  id = $data->id" ;
    $query = $db->prepare($sql);
    $query->execute();

    ?>