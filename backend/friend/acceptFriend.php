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


$path = explode('/',$_SERVER['REQUEST_URI']);
    // اللي بعثهم المستخدم pending عرض جميع طلبات الصداقة في حالة 
$sql = "SELECT *
FROM users
INNER JOIN friends
ON users.id = friends.friend_id
WHERE user_id = :id and status = :status";
$stmt =$db->prepare($sql);
$status = "pending" ;
$stmt->bindParam(':status', $status);
$stmt->bindParam(':id', $path[5]);

$stmt->execute();

$users = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode( $users);


