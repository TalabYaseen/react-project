<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");
    
    include_once './config.php';
    include_once './users.php';

    $database = new DB();
    $db = $database->getConnection();

    $users = new User($db);

    $stmt = $users->getUsers();
    $itemCount = $stmt->rowCount();

    if($itemCount > 0){
        
        $userArr = array();
       
        // echo json_encode($stmt);
        // echo ("good");
        // die();
        while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);
            $e = array(
                "id" => $id,
                "first_name" => $first_name,
                "last_name" => $last_name,
                "email" => $email,
                "password" => $password,
            );

            array_push($userArr, $e);
        }
        echo json_encode($userArr);
    }
    else{
        echo json_encode('');
    }

?>