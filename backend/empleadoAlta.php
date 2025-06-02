<?php
require_once 'DB.php';

header('Content-Type: application/json; charset=utf-8');

$pdo = DB::connect();

$prueba = $pdo->prepare(
    "INSERT INTO empleados (nombre, dni, fecha_nac, desarrollador, descripcion, idArea) 
    VALUES (:nombre, :dni, :fecha_nac, :desarrollador, :descripcion, :idArea)");
$prueba->execute(
    ["nombre" => $datos['nombre'], 
    "dni" => $datos['dni'],
    "fecha_nac" => $datos['fecha_nac'],
    "desarrollador" => $datos['desarrollador'],
    "descripcion" => $datos['descripcion'],
    "idArea" => $datos['idArea']
]);
$data = $prueba->fetch(PDO::FETCH_ASSOC);

DB::disconnect();

echo json_encode($data);