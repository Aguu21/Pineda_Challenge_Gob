<?php
// Headers para poder acceder en desarrollo
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

//Controla el flujo de la api
if (isset($_GET["action"])){
    $input = file_get_contents("php://input");
    $datos = json_decode($input, true);
    switch($_SERVER["REQUEST_METHOD"]){
        case "POST":
            switch ($_GET["action"]){
                case "Alta":
                    if (isset($datos['nombre'], $datos['dni'], 
                        $datos['fecha_nac'], $datos['desarrollador'],
                        $datos['descripcion'], $datos['idArea'])) 
                    { 
                        include "empleados/empleadoAlta.php";
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
                case "ConsultaEmpleados":
                    include "empleados/consultasEmpleado.php";
                    return ConsultasEmpleado::TraerListado();
                    break;
                case "ConsultaAreas":
                    include "empleados/consultasEmpleado.php";
                    return ConsultasEmpleado::TraerAreas();
                    break;
                default:
                    echo json_encode(["error" => "Esa acción no existe"]);
                    break;
                }
            break;
        case "PUT":
            switch ($_GET["action"]){
                case "Modificar":
                    if (isset($datos['nombre'], $datos['dni'], 
                        $datos['fecha_nac'], $datos['desarrollador'],
                        $datos['descripcion'], $datos['idArea'], $datos['idEmpleado'])) 
                    { 
                        include "empleados/empleadoModificar.php";
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
        case "DELETE":
            switch ($_GET["action"]){
                case "Eliminar":
                    if (isset($_GET['idEmpleado'])) 
                    { 
                        include "empleados/empleadoEliminar.php";
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
        default:
            echo json_encode(["error" => "Método no incluido"]);
            break;
    }
}
