import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
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
  constructor(private router: Router, private http: HttpClient){}

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

  validarEmpleado(){
    return;
  }

  registrar(){
    this.validarEmpleado();
    let error = this.api.altaEmpleado(this.empleado);
  }
}
