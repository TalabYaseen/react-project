<?php require_once("../config.php");
$database = new DB();
$db = $database->getConnection(); ?>

<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods:*");

$path = explode('?' , $_SERVER['REQUEST_URI']);
$id =  $path[1];
$sql = "SELECT * FROM `likes`
INNER JOIN `users` ON likes.user_id = users.id
WHERE likes.post_id = $id " ;
$query = $db->prepare($sql);
$stmt=$query->execute();
$count = $query->rowCount();
echo (json_encode($count));
// echo(json_encode($stmt));

// echo ($_SERVER['REQUEST_URI'])

?>