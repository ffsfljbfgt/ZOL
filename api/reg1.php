<?php
include "common.php";
$usname = isset($_GET['usname']) ? $_GET['usname'] : '';
$psw = isset($_GET['psw']) ? $_GET['psw'] : '';
$sql= "insert INTO usname(usname,psw) VALUES('$usname','$psw')";
$res = $conn->query($sql);
echo $res

?>