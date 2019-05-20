<?php
include "common.php";
$id = isset($_GET['id']) ? $_GET['id'] : '';
$usname = isset($_GET['usname']) ? $_GET['usname'] : '';
$vl = isset($_GET['vl']) ? $_GET['vl'] : ''; 
$sql = "INSERT INTO car(usname,id,number) VALUES('$usname','$id','$vl')";
$res = $conn->query($sql);
// echo $vl

// $num = $res->num_rows;
// $content = $res->fetch_all(MYSQLI_ASSOC);
//  if($num>=1){
//     echo json_encode($content,JSON_UNESCAPED_UNICODE);
//  }else{
//     echo "true";
//  }
?>