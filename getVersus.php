<?php
header("Access-Control-Allow-Origin: *");

$connection = new mysqli("mysql-nectardedemo.alwaysdata.net", "170341_dev2019", "dev2019form", "nectardedemo_versus");
$request = $connection->prepare("SELECT id, nom FROM versus");
$request->execute();

$nom = null;
$pv = null;
$pa = null;
$request->bind_result($nom, $pv, $pa);

$personnage = [];
while ($request->fetch()) {
    $personnage[] = [
        "nom" => $nom,
        "pv" => $pv,
        "pa" => $pa,
    ];
}

echo json_encode($personnage);

$request->close();
$connection->close();

?>