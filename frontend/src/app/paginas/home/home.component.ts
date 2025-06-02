import { CommonModule } from '@angular/common';
import { Component, inject  } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  api = inject(ApiService);

  //Valores que se usan para llenar la <table>
  empleado = {
    action: "", //Acción a tomar en la api
    idEmpleado: 0,
    nombre: "Ejemplo",
    dni: 0,
    fecha_nac: "01-02-2025",
    desarrollador: true,
    descripcion: "Ejemplo",
    idArea: 1
  }
  empleados: any;

  constructor(private router: Router){}
  
  ngOnInit(){
    this.llenarTabla();
  }

  ngAfterViewInit() {
    this.llenarTabla();
  }

  //Eliminar un empleado de la tabla
  eliminar(empleado: any){
    empleado.action = "Eliminar";
    this.api.eliminarEmpleado(empleado.idEmpleado).subscribe({
      next: (respuesta: any) => {
        if(respuesta.error){
          console.log("Error: ", respuesta.error);
        }
        else{
          console.log("Usuario Eliminado con éxito");
          this.llenarTabla();
        }
      }
    });
  }

  //Modificar un empleado de la tabla
  modificar(empleado: any){ 
    this.router.navigate(["/alta"], {
      queryParams: { data: JSON.stringify(empleado)}
    });
  }

  //Poder dar de alta en otra pantalla
  alta(){
    this.router.navigate(["/alta"]);
  }

  //Traer los valores de la tabla empleados
  llenarTabla(){
    this.api.traerEmpleados().subscribe({
      next: (respuesta: any) => {
        if(respuesta.error){
          console.log("Error: ", respuesta.error);
        }
        else{
          this.empleados = respuesta;
        }
      }
    });
  }
}
