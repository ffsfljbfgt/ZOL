<?php
include "common.php";
$usname = isset($_POST['usname']) ? $_POST['usname'] : '';
$psw = isset($_POST['psw']) ? $_POST['psw'] : '';
$sql= "SELECT * FROM usname WHERE usname='$usname'AND psw='$psw'";
$res = $conn->query($sql);
// $content= $res->fetch_all(MYSQLI_ASSOC);
// echo json_encode($content,JSON_UNESCAPED_UNICODE);
// echo $usname
if($res->num_rows) {
    //找到，允许登陆
    echo 'yes';
}else{
    //找不到，不允许登陆
    echo 'no';
}
$res->close();
$conn->close();
?>