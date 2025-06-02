<?php
require_once 'utils/DB.php';

header('Content-Type: application/json; charset=utf-8');

//Dar de baja un empleado según id
$pdo = DB::connect();

$prueba = $pdo->prepare(
    "DELETE FROM empleados WHERE idEmpleado = :idEmpleado");

$prueba->execute(["idEmpleado" => $_GET['idEmpleado']]);

$data = $prueba->fetch(PDO::FETCH_ASSOC);

DB::disconnect();

echo json_encode($data);