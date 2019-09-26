<?php

// Pour corriger l'erreur sur le header origin
header("Access-Control-Allow-Origin: *");

// Recuperer les valeurs envoyé par la requete ajax    
$nom = $_POST["nom"];
$pv = $_POST["pv"];
$pa = $_POST["pa"];
$imageUrl = $_POST["imageUrl"];

// Je vérifie que les données sont bien récuperé
if (!$nom || !$pv || !$pa || !$imageUrl) {
    echo "Il manque une info !"
    die(); // L'éxecution du code se termine
}

// On initialise la connexion avec la bdd
$connexion = new mysqli("mysql-nectardedemo.alwaysdata.net", "170341_dev2019", "dev2019form", "nectardedemo_versus");

// On prepare la requete SQL
$requete = $connexion->prepare("INSERT INTO versus (nom, pv, pa, url) VALUES (?, ?, ?, ?)");

// On renseigne les valeurs dans la requete
$requete->bind_param("siis", $nom, $pv, $pa, $imageUrl);

// On execute la requete
$requete->execute();

// On ferme la connexion a la bdd
$requete->close();
$connexion->close();

?>