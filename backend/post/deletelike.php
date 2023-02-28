<?php require_once("../config.php");
$database = new DB();
$db = $database->getConnection(); ?>

<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods:*");
$path = explode('?' , $_SERVER['REQUEST_URI']);
$id =  $path[2];
$userid = $path[1];
$sql = "DELETE FROM `likes` WHERE post_id = $id AND user_id = $userid";
$query = $db->prepare($sql);
$stmt=$query->execute();