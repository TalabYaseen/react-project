<?php
   header("Access-Control-Allow-Origin:*");
   header("Content-Type: application/json;");
   header("Access-Control-Allow-Methods: *");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../config.php';

    $database = new DB();
    $db = $database->getConnection();



$method = $_SERVER['REQUEST_METHOD'];

// to check success connect
// var_dump($conn); 
// print_r($_POST);

//preivewلحتى يطبع في ال 
// print_r(file_get_contents('php://input'));


        $path = explode('/',$_SERVER['REQUEST_URI']);
        $currentid = $path[5];
        $profileid = $path[6];
        // print_r($path);die;
        // if(isset($path[4])&&is_numeric($path[4])){

        //     $sql = "SELECT *
        //     FROM users
        //     INNER JOIN friends
        //     ON users.id = friends.friend_id
        //     WHERE user_id = :id and status = :status";
        //     $stmt =$db->prepare($sql);
        //     $status = "accepted" ;
        //     $stmt->bindParam(':status', $status);
        //     $stmt->bindParam(':id', $path[5]);

        //     $stmt->execute();
        //     $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

        // }else{

        //     $stmt =$db->prepare($sql);
        //     $stmt->execute();
        //     $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        // }
        
        // echo json_encode( $users);

        $sql = "SELECT * FROM friends
            WHERE user_id = '$currentid' AND friend_id = '$profileid'  AND status = 'pending'";
            $stmt =$db->prepare($sql);
            $stmt->execute();

            if (($stmt->rowCount())) {
                echo(json_encode("receiver")) ;
            }
        $sql = "SELECT * FROM friends
            WHERE user_id = '$profileid' AND friend_id = '$currentid'  AND status = 'pending'";
            $stmt =$db->prepare($sql);
            $stmt->execute();

            if (($stmt->rowCount())) {
                echo(json_encode("sender")) ;
            }
        $sql = "SELECT * FROM friends
            WHERE user_id = '$currentid' AND friend_id = '$profileid'  AND status = 'accepted'";
            $stmt =$db->prepare($sql);
            $stmt->execute();

            if (($stmt->rowCount())) {
                echo(json_encode("friend")) ;
            }
