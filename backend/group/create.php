<?php
   header("Access-Control-Allow-Origin:*");
   header("Content-Type: application/json;");
   header("Access-Control-Allow-Methods: POST");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../config.php';
    include_once './groups.php';

    $database = new DB();
    $db = $database->getConnection();

    $group = new Group($db);
    $data = json_decode(file_get_contents("php://input"));

    $group->name = $data->name;
    $ugroupser->user_id = $data->user_id;
    $group->discription = $data->discription;
    $group->image_cover = $data->image_cover;
    if($group->createGroups()){
        echo json_encode("Group created.");
    } else{
        echo json_encode("Failed to create group.");
    }
?>