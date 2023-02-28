<?php
    class Group{

        // conn
        private $conn;

        // table
        private $dbTable = " groups";

        // col
        public $id;
        public $name;
        public $user_id;
        public $discription;
        public $image_cover;
        
      
        // db conn
        public function __construct($db){
            $this->conn = $db;
        }

        // GET Users
        public function getGroups(){
            $sqlQuery = "SELECT * FROM " . $this->dbTable;
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->execute();
            return $stmt;
        }

        // CREATE User
        public function createGroups(){
            $sqlQuery = "INSERT INTO
                        ". $this->dbTable ."
                    SET
                    name = :name, 
                    user_id = :user_id, 
                    discription = :discription, 
                    image_cover = :image_cover";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            // sanitize
            $this->name=htmlspecialchars(strip_tags($this->name));
            $this->user_id=htmlspecialchars(strip_tags($this->user_id));
            $this->discription=htmlspecialchars(strip_tags($this->discription));
            $this->image_cover=htmlspecialchars(strip_tags($this->image_cover));
                   
            // bind data
            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":user_id", $this->user_id);
            $stmt->bindParam(":discription", $this->discription);
            $stmt->bindParam(":image_cover", $this->image_cover);
           
            if($stmt->execute()){
               return true;
            }
            return false;
        }

       // GET User
       public function getSingleUser(){
        $sqlQuery = "SELECT
                    id, 
                    name, 
                    user_id, 
                    discription,
                    image_cover
                  FROM
                    ". $this->dbTable ."
                WHERE 
                   id = :id
                LIMIT 0,1";

        $stmt = $this->conn->prepare($sqlQuery);
        $stmt->bindParam(":id", $this->id);
        $stmt->execute();
        $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
        
        $this->name = $dataRow['name'];
        $this->user_id = $dataRow['user_id'];
        $this->discription = $dataRow['discription'];
        $this->image_cover = $dataRow['image_cover'];
      
    }      
        

        // UPDATE User
        public function updateGroups(){
            $sqlQuery = "UPDATE
                        ". $this->dbTable ."
                    SET
                    name = :name, 
                    user_id = :user_id, 
                    discription = :discription,
                    image_cover = :image_cover
                            WHERE 
                        id = :id";
        
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->name=htmlspecialchars(strip_tags($this->name));
            $this->user_id=htmlspecialchars(strip_tags($this->user_id));
            $this->discription=htmlspecialchars(strip_tags($this->discription));
            $this->image_cover=htmlspecialchars(strip_tags($this->image_cover));
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            // bind data
            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":user_id", $this->user_id);
            $stmt->bindParam(":discription", $this->discription);
            $stmt->bindParam(":image_cover", $this->image_cover);
            $stmt->bindParam(":id", $this->id);
        
            if($stmt->execute()){
               return true;
            }
            return false;
        }

        // DELETE User
        function deleteGroups(){
            $sqlQuery = "DELETE FROM " . $this->dbTable . " WHERE id = ?";
            $stmt = $this->conn->prepare($sqlQuery);
        
            $this->id=htmlspecialchars(strip_tags($this->id));
        
            $stmt->bindParam(1, $this->id);
        
            if($stmt->execute()){
                return true;
            }
            return false;
        }

        public function findGroups (){
            $sqlQuery = "SELECT
                        *
                      FROM
                        ". $this->dbTable ."
                    WHERE 
                    name = :name AND
                    id = :id

                    LIMIT 0,1";
    
            $stmt = $this->conn->prepare($sqlQuery);
            $stmt->bindParam(":name", $this->name);
            $stmt->bindParam(":id", $this->id);
            $stmt->execute();
            $dataRow = $stmt->fetch(PDO::FETCH_ASSOC);
            return $dataRow;
            if ($dataRow) {
                echo (json_decode($dataRow));
            }else {
                echo "group not found";
            }
            
            // $this->first_name = $dataRow['first_name'];
            // $this->last_name = $dataRow['last_name'];
            // $this->email = $dataRow['email'];

        }    

    }
    
?>