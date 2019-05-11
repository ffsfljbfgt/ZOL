<?php
 $severname = 'localhost';
 $username ="root";
 $dbpsw='';
 $dbname = 'shop';
 $conn =new mysqli($severname,$username,$dbpsw,$dbname);
if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } ;
    $conn->set_charset('utf8');
?>