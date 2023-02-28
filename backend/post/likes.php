<?php require_once("../config.php");
$database = new DB();
$db = $database->getConnection(); ?>

<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods:*");

$path = explode('?' , $_SERVER['REQUEST_URI']);
$id =  $path[1];
$userid = $path[2];
$sql = "SELECT * FROM `likes`
INNER JOIN `users` ON likes.user_id = users.id
WHERE likes.post_id = $id " ;
$query = $db->prepare($sql);
$stmt=$query->execute();
$count1 = $query->rowCount();
// echo (json_encode($count));
// check if user liked the post
$sql = "SELECT * FROM `likes`
INNER JOIN `users` ON likes.user_id = users.id
WHERE likes.post_id = $id AND id = $userid";
$query = $db->prepare($sql);
$stmt=$query->execute();
$count = $query->rowCount();
if ($count) {
    // $response['isliked'] = true;
    $response = ["count"=>$count1,'isliked'=>'true'];
}else {
    // $response['isliked'] = false;
    $response = ["count"=>$count1,'isliked'=>'false'];
}
echo json_encode( $response);
// echo(json_encode($stmt));

// echo ($_SERVER['REQUEST_URI'])

?>