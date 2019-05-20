<?php
include "common.php";
$id = isset($_GET['id']) ? $_GET['id'] : '';
$usname = isset($_GET['usname']) ? $_GET['usname'] : ''; 
$sql = "SELECT * FROM car where usname=".$usname." AND id=".$id;
$res = $conn->query($sql);
$content = $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>