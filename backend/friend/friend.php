<?php
   header("Access-Control-Allow-Origin:*");
   header("Content-Type: application/json;");
   header("Access-Control-Allow-Methods: *");
   header("Access-Control-Max-Age: 3600");
   header("Access-Control-Allow-Headers: Content-Type,Access-Control-Allow-Headers, Authorization, X-Requested-With");

    include_once '../config.php';

    $database = new DB();
    $db = $database->getConnection();
    $path = explode('?',$_SERVER['REQUEST_URI']);
$sql = "SELECT * FROM users WHERE ( users.id IN (SELECT friends.friend_id as friend FROM friends WHERE friends.user_id  = $path[1] AND friends.status = 'accepted') );";
$stmt =$db->prepare($sql);
$status = "accepted" ;
$stmt->execute();
$users = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode( $users);
