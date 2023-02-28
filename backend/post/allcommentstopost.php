<?php require_once("../config.php");
$database = new DB();
$db = $database->getConnection(); ?>

<?php

header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods:*");

$path = explode('?' , $_SERVER['REQUEST_URI']);
// echo ($_SERVER['REQUEST_URI']);
$sql = "SELECT * FROM `comments`
INNER JOIN `users` ON comments.user_id = users.id
WHERE comments.post_id = $path[1]" ;
$query = $db->prepare($sql);
$stmt=$query->execute();
$stmt=$query->fetchAll(); 
$count=$query->rowCount(); 
echo(json_encode($stmt));
// echo("count");
// echo($count);

// echo ("good")

?>