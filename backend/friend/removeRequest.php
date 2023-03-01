<?php
   header('Access-Control-Allow-Origin: *');
   header("Content-Type: application/json;");
   header("Access-Control-Allow-Methods: *");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../config.php';

    $database = new DB();
    $db = $database->getConnection();


$method = $_SERVER['REQUEST_METHOD'];


$user = json_decode(file_get_contents('php://input'));



$sql = "DELETE FROM friends WHERE user_id = :user_id and friend_id = :friend_id ";

$stmt =$db->prepare($sql);
$stmt->bindParam(':user_id', $user->user_id);
$stmt->bindParam(':friend_id', $user->friend_id);
$stmt->execute();

// print_r($path);

if($stmt->execute()){
    $response = ['status'=>1,'message'=>'Record deleted successfully.'];
}else{
    $response = ['status'=>0,'message'=>'Failed to delete  record.'];

}
echo json_encode( $response);