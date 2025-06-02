<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
if (isset($_GET["action"])){
    switch($_SERVER["REQUEST_METHOD"]){
        case "POST":
            switch ($_GET["action"]){
                case "Alta":
                    $rawInput = file_get_contents("php://input");
                    $datos = json_decode($rawInput, true);

                    if (isset($datos['nombre'], $datos['dni'], 
                        $datos['fecha_nac'], $datos['desarrollador'],
                        $datos['descripcion'], $datos['idArea'])) 
                    { 
                        include "empleadoAlta.php";
                    }
                    else{
                        echo json_encode(["error" => "Faltaron parametros",]);
                    }
                    break;
                default:
                    echo json_encode(["error" => "Esa acción no existe"]);
                    break;
            }
            break;
        case "GET":
            switch ($_GET["action"]){
                case "Consulta":
                    include "consultasEmpleado.php";
                    return ConsultasEmpleado::TraerListado();
                    break;
                default:
                    echo json_encode(["error" => "Esa acción no existe"]);
                    break;
                }
            break;
        case "PUT":
            switch ($_GET["action"]){
                case "Modificar":
                    include "empleadoModificar.php";
                    break;
                default:
                    echo json_encode(["error" => "Esa acción no existe"]);
                    break;
            }
            break;
        case "DELETE":
            switch ($_GET["action"]){
                case "Borrar":
                    include "empleadoBorrar.php";
                    break;
                default:
                    echo json_encode(["error" => "Esa acción no existe"]);
                    break;
            }
            break;
        default:
            echo json_encode(["error" => "Método no incluido"]);
            break;
    }
}
