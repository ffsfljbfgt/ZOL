<?php
include "common.php";
$usname = isset($_GET['usname']) ? $_GET['usname'] : '';
$sql = "select * from car where usname=".$usname;
$res = $conn->query($sql);
$content = $res->fetch_all(MYSQLI_ASSOC);
echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>