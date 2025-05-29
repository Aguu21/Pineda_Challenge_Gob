import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router){}
  empleado = {
    nombre: "Ejemplo",
    dni: 0,
    fecha_nac: "01-02-2025",
    desarrollador: true,
    descripcion: "Buen empleado",
    idArea: 1
  }
  empleados = [this.empleado, this.empleado];

  eliminar(empleado: any){
    console.log("Eliminar")
  }
  modificar(empleado: any){
    console.log("Modificar")
  }
  alta(){
    this.router.navigate(["/alta"]);
  }
}
