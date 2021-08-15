<?php

header ('Content-Type: application/json');
header ('Access-Control-Allow-Origin: *');
$iq_id = $_GET['id'];

include "config.php";

$sql = "select * from products where id = {$iq_id}";
$result = mysqli_query($conn, $sql) or die ("SQL Query Failed");

if(mysqli_num_rows($result) > 0){

    $output = mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode($output);
}
else{
    echo json_encode(array('message' => 'No Record Found.', 'status' => false));
}
?>