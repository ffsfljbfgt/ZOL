<?php
include 'common.php';

$page = isset($_GET['page']) ? $_GET['page'] : '';
$num = isset($_GET['num']) ? $_GET['num'] : '';
$index = ($page - 1) * $num;
$sql = "SELECT * FROM shoping LIMIT $index,$num";
$res = $conn->query($sql);
$content = $res->fetch_all(MYSQLI_ASSOC);
// echo json_encode($content,JSON_UNESCAPED_UNICODE)

$sql2 = 'SELECT * FROM  shoping';
$res2 = $conn->query($sql2);
$data = array(
    'total' => $res2->num_rows,
    'goodslist' => $content,
    'page' => $page,
    'num' => $num
);
echo json_encode($data,JSON_UNESCAPED_UNICODE);







?>