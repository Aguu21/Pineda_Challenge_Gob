<?php
require_once 'DB.php';

header('Content-Type: application/json; charset=utf-8');

$pdo = DB::connect();

$prueba = $pdo->prepare(
    "UPDATE empleados 
    SET nombre = :nombre, dni = :dni, fecha_nac = :fecha_nac, 
    desarrollador = :desarrollador, descripcion = :descripcion, idArea = :idArea 
    WHERE idEmpleado = :idEmpleado");
$prueba->execute(
    ["nombre" => $datos['nombre'], 
    "dni" => $datos['dni'],
    "fecha_nac" => $datos['fecha_nac'],
    "desarrollador" => $datos['desarrollador'],
    "descripcion" => $datos['descripcion'],
    "idArea" => $datos['idArea'],
    "idEmpleado" => $datos['idEmpleado']
]);

$data = $prueba->fetch(PDO::FETCH_ASSOC);

DB::disconnect();

echo json_encode($data);