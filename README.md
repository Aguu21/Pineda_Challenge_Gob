- Necesario
    - Angular
    - XAMPP Apache
    - XAMPP MySQL
- Comandos
    - Sobre /backend: ng serve
    - Para frontend cambié la ruta que usa XAMPP de httpd.conf

# DB
## DER 
![DER](assets/challenge.png)
## TABLAS E INSERTS
```
CREATE TABLE `empleados` (
  `idEmpleado` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `dni` int(8) NOT NULL,
  `fecha_nac` date NOT NULL,
  `desarrollador` tinyint(1) NOT NULL,
  `descripcion` varchar(100) NOT NULL,
  `idArea` int(11) NOT NULL,
  PRIMARY KEY (`idEmpleado`),
  KEY `fk_empleados_area` (`idArea`),
  CONSTRAINT `fk_empleados_area` FOREIGN KEY (`idArea`) REFERENCES `areas` (`idArea`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci AUTO_INCREMENT=9;

CREATE TABLE `areas` (
  `idArea` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `areas` (`idArea`, `nombre`) VALUES
(1, 'Sistemas'),
(2, 'Mantenimiento'),
(3, 'Ventas'),
(4, 'RRHH');
```
- Primera Instancia
    - Definí partes de backend y frontend
    - Backend con PHP
    - Frontend con Angular

- Segunda Instancia
    - Definir el apartado visual para:
        - '/home'
        - '/alta'

- Tercera Instancia
    - Implementar los archivos que permiten la conexión con la DB.

- Cuarta Instancia
    - Comprobar el funcionamiento de la api implementando:
        - Traer Listado de Empleados

- Quinta Instancia
    - Implementar la funcionalidad de Alta

- Sexta Instancia
    - Implementar las funcionalidades: 
        - Actualizar empleado
        - Eliminar empleado 

- Septima Instancia
    - Documentar, ser consistente y validar