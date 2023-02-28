<?php

use function PHPSTORM_META\type;

 require_once("../config.php");
$database = new DB();
$db = $database->getConnection(); ?>

<?php

header("Access-Control-Allow-Origin: *"); 
header("Access-Control-Allow-Methods:*");

$comment = json_decode(file_get_contents('php://input'),true);
$userid = $comment['user_id'];
$postid = $comment['post_id'];
$content = $comment['content'];
$sql = "INSERT INTO `comments` ( comment_content,user_id, post_id) VALUES (?,?,?)" ;
$query = $db->prepare($sql);
$stmt=$query->execute([$content,$userid,$postid]);
?>