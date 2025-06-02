import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-alta',
  imports: [CommonModule, FormsModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css',
})
export class AltaComponent {

  api = inject(ApiService);
  
  //Valores que toman de los <input>
  empleado = {
    action: "Alta", //Acción a tomar en la api
    idEmpleado: 0,
    nombre: "",
    dni: 0,
    fecha_nac: "",
    desarrollador: false,
    descripcion: "",
    idArea: 0
  }
  
  //Valores que se usan para llenar el <select>
  area = {
    idArea: 0,
    nombre: ""
  }
  areas: any;

  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute){}

  ngOnInit() {
    this.llenarAreas();
    this.vaciar();

    //Por si se va a modificar un usuario
    this.route.queryParams.subscribe(params => {
      if (params["data"]) {
        this.empleado = JSON.parse(params["data"]);
        this.empleado.action = "Modificar";
      }
    });
  }

  //Volver al home
  volver(){
    this.router.navigate(["/home"]);
  }

  //Limpiar los <input>
  vaciar(){
    this.empleado = {
      action: "Alta",
      idEmpleado: 0,
      nombre: "",
      dni: 0,
      fecha_nac: "",
      desarrollador: false,
      descripcion: "",
      idArea: 0
    }
  }

  //Comprobar que los campos sean correctos
  validarEmpleado(){
    if(!this.empleado.dni || this.empleado.dni < 0 || !this.empleado.idArea ||
      !this.empleado.fecha_nac.trim() || !this.empleado.descripcion.trim() || 
      !this.empleado.nombre.trim() || !this.validarAño()){
        return false
    }
    return true
  }

  //Comprobar que no se eligió un año futuro a la fecha
  validarAño(){
    let añoHoy = new Date().getFullYear();
    let añoElegido = new Date(this.empleado.fecha_nac).getFullYear();
    return añoElegido < añoHoy;
  }

  //Traer los valores de la tabla empleados
  llenarAreas(){
    this.api.traerAreas().subscribe(data => {
      this.areas = data;
    });
  }

  //Registrar o modificar un empleado según los campos
  registrar(){
    if(!this.validarEmpleado()){
      console.log("Falta completar parámetros")
      return;
    }
    
    if(this.empleado.action == "Modificar"){
      //Modificar
      this.api.modificarEmpleado(this.empleado).subscribe({
          next: (respuesta: any) => {
            if(respuesta.error){
              console.log("Error: ", respuesta.error);
            }
            else{
              console.log("Usuario Modificado con éxito");
                  this.vaciar();
                  this.router.navigate(["/home"]);
            }
          }
        });
    }
    else{
      //Alta
      this.api.altaEmpleado(this.empleado).subscribe({
          next: (respuesta: any) => {
            if(respuesta.error){
              console.log("Error: ", respuesta.error, " ");
            }
            else{
              console.log("Usuario Registrado con éxito");
                  this.vaciar();
            }
          }
        });
    }
  }
}
