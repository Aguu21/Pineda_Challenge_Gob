<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
if (isset($_GET["action"])){
    switch($_SERVER["REQUEST_METHOD"]){
        case "POST":
            switch ($_GET["action"]){
                case "Alta":
                    if (isset($_POST['Nombre'], $_POST['DNI'], 
                            $_POST['Fecha_Nac'], $_POST['Desarrollador'], 
                            $_POST['Descripcion'], $_FILES['IdArea'])
                        ) {
                        include "empleadoAlta.php";
                    }
                    else{
                        echo "Faltaron parametros";
                    }
                    break;
                default:
                    echo "Accion no incluida";
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
                    break;
                }
            break;
        case "PUT":
            switch ($_GET["action"]){
                case "Modificar":
                    include "empleadoModificar.php";
                    break;
                default:
                echo "No existe esa accion";
                    break;
            }
            break;
        case "DELTE":
            switch ($_GET["action"]){
                case "Borrar":
                    include "empleadoBorrar.php";
                    break;
                default:
                echo "No existe esa accion";
                    break;
            }
            break;
        default:
            echo "No programado";
            break;
    }
}
