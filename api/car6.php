<?php
include "common.php";
$usname = isset($_GET['usname']) ? $_GET['usname'] : '';
$sql = "DELETE FROM car WHERE usname=".$usname;
$res = $conn->query($sql);
?>