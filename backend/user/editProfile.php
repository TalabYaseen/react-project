<?php 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json;");
header("Access-Control-Allow-Methods: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
	
include ('../config.php');

$object = new DB;
$conn = $object->getConnection();

$post = json_decode(file_get_contents('php://input'));
// print_r($post);
$sql = "UPDATE users SET first_name =:first_name , last_name =:last_name , email=:email ,password =:password, about =:about , city =:city ,country =:country  WHERE id =:id";
$stmt =$conn->prepare($sql);
$stmt->bindParam(':id', $post->id);
$stmt->bindParam(':first_name', $post->first_name);
$stmt->bindParam(':last_name', $post->last_name);
$stmt->bindParam(':email', $post->email);
$stmt->bindParam(':password', $post->password);
$stmt->bindParam(':about', $post->about);
$stmt->bindParam(':country', $post->country);
$stmt->bindParam(':city', $post->city);


if($stmt->execute()){
    $response = ['status'=>1,'message'=>'Record updated successfully.'];
}else{
    $response = ['status'=>0,'message'=>'Failed to update  record.'];
}
echo json_encode( $response);

?>

