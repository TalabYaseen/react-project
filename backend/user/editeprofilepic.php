<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json;");
    
    include_once '../config.php';
    include_once './users.php';
    $database = new DB();
    $db = $database->getConnection();
    $id = $_POST["userid"];
    $pic = $_FILES["profilephoto"] ;
    $targetDir = "../../frontend/social_media/src/components/images/profile_pics/";
    $fileName = ($pic["name"]);
    $targetPath = $targetDir . $fileName;
    move_uploaded_file($pic["tmp_name"], $targetPath);
    $sql = "UPDATE users SET profile_pic = ? WHERE id = ?" ;
    $query = $db->prepare($sql);
    $query->execute([$fileName , $id]);

    ?>