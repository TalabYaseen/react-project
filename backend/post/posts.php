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
        $sql = "SELECT * FROM `users`
                INNER JOIN `posts` ON posts.user_id = users.id
                ORDER BY posts.created_at DESC" ;
        $query = $db->prepare($sql);
        $query->execute();
        $posts = $query->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($posts);
        break;


    case 'POST' :

        $text = $_POST["post"];
        $user_id = $_POST['user_id'];
        if($_FILES["file"] == null){
        $file = "";
        } else {
            $file = $_FILES["file"] ;
        }

        if($file != ""){
            $targetDir = "../../frontend/social_media/src/components/images/";
            $fileName = basename($file["name"]);
            $targetPath = $targetDir . $fileName;
        
            if (move_uploaded_file($file["tmp_name"], $targetPath)) {
            echo "File uploaded successfully";
                $sql = "INSERT INTO posts (user_id , content , post_image)
                        VALUES ( ? , ? , ? )" ;
                $query = $db->prepare($sql);
                $query->execute([$user_id , $text , $fileName ]);
                break;
            } else {
            echo "Error uploading file";
            }
        } else {
            $sql = "INSERT INTO posts (user_id , content )
                    VALUES ( ? , ? )" ;
            $query = $db->prepare($sql);
            $query->execute([$user_id , $text ]);
            break;
        }



    case 'DELETE' :
        $sql = "DELETE FROM posts WHERE post_id = ?" ;
        $path = explode('?' , $_SERVER['REQUEST_URI']);
        
        if(isset($path[1]) && is_numeric($path[1])){
            // echo "DELETED";
            $query = $db->prepare($sql);
            $query->execute([$path[1]]);
            return "post deleted";
        }
        break;
}