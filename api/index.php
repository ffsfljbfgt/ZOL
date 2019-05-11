<?php
 include "common.php";
 $sql= "SELECT * from shoping LIMIT 0,9";
 $res = $conn->query($sql);
 $content= $res->fetch_all(MYSQLI_ASSOC);
 echo json_encode($content,JSON_UNESCAPED_UNICODE);

?>