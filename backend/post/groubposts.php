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
        $id = $path[1];
        $sql1 = " SELECT * FROM `members`
                INNER JOIN `users` ON members.user_id = users.id
                WHERE members.group_id =$id" ;
        $query1 = $db->prepare($sql1);
        $query1->execute();
        $users = $query1->fetchAll(PDO::FETCH_ASSOC);
        $sql2 = "SELECT * FROM posts INNER JOIN `users` ON posts.user_id  = users.id Where posts.group_id =$id";
        $query2 = $db->prepare($sql2);
        $query2->execute();
        $posts = $query2->fetchAll(PDO::FETCH_ASSOC);
        $sql3 = " SELECT * FROM `groups`
                WHERE id =$id" ;
        $query3 = $db->prepare($sql3);
        $query3->execute();
        $groupdata = $query3->fetch(PDO::FETCH_ASSOC);
        $response = ["members"=>$users,"posts"=>$posts,"groupdata"=>$groupdata];
        echo (json_encode($response));

        // echo json_encode($response);
        break;


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