<?php
include "common.php";
$id = isset($_GET['id']) ? $_GET['id'] : '';
$usname = isset($_GET['usname']) ? $_GET['usname'] : '';
$sql = "DELETE FROM car WHERE id=".$id." AND usname=".$usname;
$res = $conn->query($sql);
?>