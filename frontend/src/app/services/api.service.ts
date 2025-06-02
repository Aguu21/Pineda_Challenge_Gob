import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = "http://localhost/";

  constructor(private http: HttpClient) { }

  traerEmpleados(){
    return this.http.get(this.api + '?action=ConsultaEmpleados');
  }

  traerAreas(){
    return this.http.get(this.api + '?action=ConsultaAreas');
  }

  altaEmpleado(body: any){
    return this.http.post(this.api + '?action=' + body.action, body);
  }

  modificarEmpleado(body: any){
    return this.http.put(this.api + '?action=' + body.action, body);
  }

  eliminarEmpleado(idEmpleado: any){
    return this.http.delete(this.api + '?action=Eliminar&idEmpleado=' + idEmpleado );
  }

}
