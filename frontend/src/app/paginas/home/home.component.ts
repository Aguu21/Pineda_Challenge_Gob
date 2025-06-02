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

  constructor(private router: Router){}
  
  ngOnInit(){
    this.llenarTabla();
  }

  ngAfterViewInit() {
    this.llenarTabla();
  }

  empleado = {
    action: "",
    idEmpleado: 0,
    nombre: "Ejemplo",
    dni: 0,
    fecha_nac: "01-02-2025",
    desarrollador: true,
    descripcion: "Buen empleado",
    idArea: 1
  }
  empleados: any;

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
  modificar(empleado: any){
    this.router.navigate(['/alta'], {
          queryParams: { data: JSON.stringify(empleado)}
        });
  }
  alta(){
    this.router.navigate(["/alta"]);
  }

  llenarTabla(){
    this.api.traerEmpleados().subscribe(data => {
      this.empleados = data;
    });
  }
}
