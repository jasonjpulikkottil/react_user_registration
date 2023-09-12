<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers:*");

$request=file_get_contents("php://input");
$data=json_decode($request);

$username=$data->username;
$password=$data->password;

$con=new mysqli("localhost","root","","react_user_registration") or die("Error Establishing Connection");
$query="insert into users(username,password) values('$username',md5('$password'));";
$res=$con->query($query);
if ($res){
echo "success";
}
else {
echo "error";
}

?>
