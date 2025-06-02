<?php
require_once 'DB.php';

class ConsultasEmpleado{
    public static function TraerListado(){
        header('Content-Type: application/json; charset=utf-8');

        $pdo = DB::connect();

        $prueba = $pdo->prepare("SELECT * FROM empleados");
        $prueba->execute();
        $data = $prueba->fetchAll(PDO::FETCH_ASSOC);

        DB::disconnect();

        echo json_encode($data);
    }

    public static function TraerEmpleado($id){
        header('Content-Type: application/json; charset=utf-8');

        $pdo = DB::connect();

        $prueba = $pdo->prepare("SELECT * FROM empleados WHERE idEmpleado = :idEmpleado");
        $prueba->execute(["idEmpleado" => $datos['idEmpleado']]);
        $data = $prueba->fetchAll(PDO::FETCH_ASSOC);

        DB::disconnect();

        echo json_encode($data);
    }

    public static function TraerAreas(){
        header('Content-Type: application/json; charset=utf-8');

        $pdo = DB::connect();

        $prueba = $pdo->prepare("SELECT * FROM areas");
        $prueba->execute();
        $data = $prueba->fetchAll(PDO::FETCH_ASSOC);

        DB::disconnect();

        echo json_encode($data);
    }
}
