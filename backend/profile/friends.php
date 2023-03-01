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


$method = $_SERVER['REQUEST_METHOD'];

switch($method){
    case "GET":

        $sql = "SELECT * FROM friends";
        $path = explode('/',$_SERVER['REQUEST_URI']);
        
        // print_r($path);break;
        if(isset($path[4])&&is_numeric($path[4])){

            $sql = "SELECT *
            FROM users
            INNER JOIN friends
            ON users.id = friends.friend_id
            WHERE user_id = :id and status = :status";
            $stmt =$db->prepare($sql);
            $status = "accepted" ;
            $stmt->bindParam(':status', $status);
            $stmt->bindParam(':id', $path[5]);

            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);

        }else{

            $stmt =$db->prepare($sql);
            $stmt->execute();
            $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }
        
        echo json_encode( $users);
        break;




    case "POST":
        $user = json_decode(file_get_contents('php://input'));
        $sql = "INSERT INTO friends ( id , user_id , friend_id , status ) VALUES ( null , :user_id , :friend_id ,:status)";
        $stmt =$db->prepare($sql);
        $status = "pending" ;
        $stmt->bindParam(':user_id', $user->user_id);
        $stmt->bindParam(':friend_id', $user->friend_id);
        $stmt->bindParam(':status', $status);
     
        if($stmt->execute()){
            $response = ['status'=>1,'message'=>'Record created successfully.'];
        }else{
            $response = ['status'=>0,'message'=>'Failed to created  record.'];

        }

        echo json_encode( $response);
        break;

        case "PUT":

        $user = json_decode(file_get_contents('php://input'));
// print_r($user);break;
        $sql = "UPDATE  friends SET  status = :status  WHERE user_id = :user_id and friend_id = :friend_id ";
        $stmt =$db->prepare($sql);
        $status = "accepted";
        $stmt->bindParam(':status',   $status);
        $stmt->bindParam(':user_id', $user->friend_id);
        $stmt->bindParam(':friend_id', $user->user_id);
        $stmt->execute();
        //

        $sql = "INSERT INTO friends ( id , user_id , friend_id , status ) VALUES ( null , :user_id , :friend_id ,:status)";
        $stmt =$db->prepare($sql);
        $status = "accepted" ;
        $stmt->bindParam(':user_id', $user->user_id);
        $stmt->bindParam(':friend_id', $user->friend_id);
        $stmt->bindParam(':status', $status);


        //


        if($stmt->execute()){
            $response = ['status'=>1,'message'=>'Record updated successfully.'];
        }else{
            $response = ['status'=>0,'message'=>'Failed to updated  record.'];

        }

        echo json_encode( $response);
        break;

        case "DELETE":


            $user = json_decode(file_get_contents('php://input'));
            print_r($user);break;

            $sql = "DELETE  FROM friends WHERE user_id = :user_id and friend_id = :friend_id ";
            
            $stmt =$db->prepare($sql);
            $stmt->bindParam(':user_id', $user->user_id);
            $stmt->bindParam(':friend_id', $user->friend_id);
            $stmt->execute();
            $stmt =$db->prepare($sql);
            $stmt->bindParam(':user_id', $user->friend_id);
            $stmt->bindParam(':friend_id', $user->user_id);
            $stmt->execute();

            // print_r($path);

            if($stmt->execute()){
                $response = ['status'=>1,'message'=>'Record deleted successfully.'];
            }else{
                $response = ['status'=>0,'message'=>'Failed to delete  record.'];

            }
            echo json_encode( $response);
            break;








}
?>