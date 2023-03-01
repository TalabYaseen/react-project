<?


// this sql get the users that sent you a friend request or you send them a friend request and the state of it is pinding
$sql = "SELECT * FROM users WHERE ( users.id IN (SELECT friends.source_id as friend FROM friends WHERE friends.target_id = :user_id AND friends.status = 0 UNION SELECT friends.target_id FROM friends WHERE friends.source_id = :user_id AND friends.status = 0) );";


// this sql get the users that sent you a friend request or you send them a friend request and the state of it is pinding
$sql = "SELECT * FROM users WHERE ( users.id IN (SELECT friends.source_id as friend FROM friends WHERE friends.target_id = :user_id AND friends.status = 0 UNION SELECT friends.target_id FROM friends WHERE friends.source_id = :user_id AND friends.status = 0) );";


// this sql get the users that sent you a friend request or you send them a friend request and the state of it is pinding
$sql = "SELECT * FROM users WHERE ( users.id IN (SELECT friends.source_id as friend FROM friends WHERE friends.target_id = :user_id AND friends.status = 0 ) );";




?>