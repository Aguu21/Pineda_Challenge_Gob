import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-alta',
  imports: [CommonModule, FormsModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css',
  standalone: true
})
export class AltaComponent {

  api = inject(ApiService);
  constructor(private router: Router, private http: HttpClient, private route: ActivatedRoute){}

  empleado = {
    action: "Alta",
    idEmpleado: 0,
    nombre: "",
    dni: 0,
    fecha_nac: "",
    desarrollador: false,
    descripcion: "",
    idArea: 0
  }
  areas: any;

  area = {
    idArea: 0,
    nombre: ""
  }

  ngOnInit() {
    this.llenarAreas();
    this.route.queryParams.subscribe(params => {
      if (params['data']) {
        this.empleado = JSON.parse(params['data']);
        this.empleado.action = "Modificar";
      }
    });
  }

  volver(){
    this.router.navigate(["/home"]);
  }

  validarEmpleado(){
    return;
  }

  llenarAreas(){
    this.api.traerAreas().subscribe(data => {
      this.areas = data;
    });
  }

  registrar(){
        //this.validarEmpleado();
    console.log(this.empleado["action"]);
    if(this.empleado.action == "Modificar"){
      this.api.modificarEmpleado(this.empleado).subscribe({
          next: (respuesta: any) => {
            if(respuesta.error){
              console.log("Error: ", respuesta.error);
            }
            else{
              console.log("Usuario Modificado con éxito");
            }
          }
        });
    }
    else{
      this.api.altaEmpleado(this.empleado).subscribe({
          next: (respuesta: any) => {
            if(respuesta.error){
              console.log("Error: ", respuesta.error, " ");
            }
            else{
              console.log("Usuario Registrado con éxito");
            }
          }
        });
    }
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
    this.router.navigate(["/home"]);
  }
}
