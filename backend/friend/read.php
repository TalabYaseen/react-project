<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");
    
    include_once '../config.php';
    include_once './friend.php';

    $database = new DB();
    $db = $database->getConnection();

    $friends = new Friend($db);
    $id = json_decode(file_get_contents("php://input"));
    $stmt = $friends->getFriends($id);
    $itemCount = $stmt->rowCount();
    if($itemCount > 0){
        
    //     $userArr = array();
       
        echo json_encode($stmt);
        // echo ("good");
        // die();
    //     while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    //         extract($row);
    //         $e = array(
    //             "id" => $id,
    //             "first_name" => $first_name,
    //             "second_name" => $second_name,
    //             "last_name" => $last_name,
    //             "Occupation" => $Occupation,
    //             "password" => $password,
    //             "photo" => $photo,
    //             "email" => $email
    //         );

    //         array_push($userArr, $e);
    //     }
    //     echo json_encode($userArr);
    }
    else{
        echo json_encode('you dont have any friends');
    }

?>