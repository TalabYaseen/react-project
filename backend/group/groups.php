<?php require_once("../config.php");
$database = new DB();
$db = $database->getConnection();
?>

<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods:*");



$method = $_SERVER['REQUEST_METHOD'];


switch ($method) {
    case 'GET' :
        $sql = "SELECT * FROM `groups`
                INNER JOIN `groups` ON groups.user_id = users.id
                ORDER BY groups.created_at DESC" ;
        $query = $db->prepare($sql);
        $query->execute();
        $groups = $query->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($groups);
        break;


    case 'POST' :
        print_r ($_POST);
        // print_r($_FILES["image_cover"]["name"]);
        $name = $_POST["name"];
        $desc = $_POST["discription"];
        $user_id = $_POST['user_id'];
        // $image_cover = $_POST['image_cover'];
        if($_FILES["image_cover"] == null){
                $sql = "INSERT INTO groups (user_id , name,discription )
                        VALUES ( ? , ? , ?  )" ;
                $query = $db->prepare($sql);
                $query->execute([$user_id , $name ,$desc]);
                break;
            }
        else {
            $file = $_FILES["image_cover"] ;
            $targetDir = "../../frontend/social_media/src/components/images/groups-pics/";
            $fileName = basename($file["name"]);
            $targetPath = $targetDir . $fileName;
        
            if (move_uploaded_file($file["tmp_name"], $targetPath)) {
            echo "File uploaded successfully";
                $sql = "INSERT INTO groups (user_id , name , image_cover , discription)
                        VALUES ( ? , ? , ? ,? )" ;
                $query = $db->prepare($sql);
                $query->execute([$user_id , $name , $fileName,$desc ]);
                break;
        }}



    case 'DELETE' :
        $sql = "DELETE FROM groups WHERE id = ?" ;
        $path = explode('?' , $_SERVER['REQUEST_URI']);
        
        if(isset($path[1]) && is_numeric($path[1])){
            // echo "DELETED";
            $query = $db->prepare($sql);
            $query->execute([$path[1]]);
            return "post deleted";
        }
        break;
}