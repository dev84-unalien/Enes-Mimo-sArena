<?php
header("Access-Control-Allow-Origin: *");

$connection = new mysqli("mysql-nectardedemo.alwaysdata.net", "170341_dev2019", "dev2019form", "nectardedemo_versus");
$request = $connection->prepare("SELECT nom, pv, pa, url FROM versus");
$request->execute();

$nom = null;
$pv = null;
$pa = null;
$url = null;

$request->bind_result($nom, $pv, $pa, $url);

$personnage = [];

while ($request->fetch()) {
    $personnage[] = [
        "nom" => $nom,
        "pv" => $pv,
        "pa" => $pa,
        "url" => $url
    ];
}

$request->close();
$connection->close();


echo json_encode($personnage);

?>