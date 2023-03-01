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
        $path = explode('?' , $_SERVER['REQUEST_URI']);
        if(isset($path[1]) && is_numeric($path[1])) {
            $sql = "SELECT * FROM `posts` WHERE user_id = $path[1]
            ORDER BY posts.created_at DESC" ;
            $query = $db->prepare($sql);
            $query->execute();
            $posts = $query->fetchAll(PDO::FETCH_ASSOC);
            echo json_encode($posts);
        break;
        }else {
        $sql = "SELECT * FROM `users` INNER JOIN `posts` ON posts.user_id = users.id 
        ORDER BY posts.created_at DESC" ;
        $query = $db->prepare($sql);
        $query->execute();
        $posts = $query->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($posts);
        break;}

    
    case 'POST' :
        echo ($_POST["post_content"]);
        print_r($_FILES["file"]);
        $text = $_POST["post_content"];
        $user_id = $_POST['user_id'];
        if($_FILES["file"] == null){
                $sql = "INSERT INTO posts (user_id , content )
                        VALUES ( ? , ? )" ;
                $query = $db->prepare($sql);
                $query->execute([$user_id , $text ]);
                break;
            }
        else {
            $file = $_FILES["file"] ;
            $targetDir = "../../frontend/social_media/src/components/images/posts-pics/";
            $fileName = basename($file["name"]);
            $targetPath = $targetDir . $fileName;
        
            if (move_uploaded_file($file["tmp_name"], $targetPath)) {
            echo "File uploaded successfully";
                $sql = "INSERT INTO posts (user_id , content , post_image)
                        VALUES ( ? , ? , ? )" ;
                $query = $db->prepare($sql);
                $query->execute([$user_id , $text , $fileName ]);
                break;
        }}



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