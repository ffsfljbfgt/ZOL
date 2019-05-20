<?php
include "common.php";
$id = isset($_GET['id']) ? $_GET['id'] : '';
$usname = isset($_GET['usname']) ? $_GET['usname'] : '';
$vl = isset($_GET['vl']) ? $_GET['vl'] : ''; 
$sql = "UPDATE car SET number=".$vl." WHERE id=".$id;
$res = $conn->query($sql);
echo $vl
?>