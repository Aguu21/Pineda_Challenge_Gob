import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alta',
  imports: [CommonModule, FormsModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {
  constructor(private router: Router){}

  empleado = {
    nombre: "",
    dni: 0,
    fecha_nac: "",
    desarrollador: false,
    descripcion: "",
    idArea: 0
  }

  volver(){
    this.router.navigate(["/home"]);
  }

  registrar(){
    return;
  }
}
