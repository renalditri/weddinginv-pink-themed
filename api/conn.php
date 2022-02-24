<?php
$host = "localhost";
$user = "root";
$pass = "";
$dbname = "wedding";
$web_link = "*";

$mysql = mysqli_connect($host, $user, $pass, $dbname);
if(!$mysql){
    die("Koneksi tidak berhasil");
}
?>