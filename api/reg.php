<?php
include "common.php";
$usname = isset($_GET['usname']) ? $_GET['usname'] : '';
$sql= "SELECT * FROM usname where usname='".$usname."'";
$res = $conn->query($sql);
$num = $res->num_rows;
if($num == 0){
    echo 1;
}else{
    echo 2;
}
?>