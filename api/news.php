<?php
include "common.php";
$search = isset($_GET['search']) ? $_GET['search'] : 'page';
$sql= "SELECT * FROM shoping ORDER BY $search LIMIT 0,9";
 $res = $conn->query($sql);
 $content= $res->fetch_all(MYSQLI_ASSOC);
 echo json_encode($content,JSON_UNESCAPED_UNICODE);
?>