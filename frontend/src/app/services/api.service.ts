import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = "http://localhost/";

  constructor(private http: HttpClient) { }

  altaEmpleado(body: any){
    this.http.post(this.api, body)
    .subscribe(respuesta => {
      return respuesta;
    });
  }

  traerEmpleados(){
    let action = "Consulta";
    console.log(this.api + '?action=' + action);
    return this.http.get(this.api + '?action=' + action);
  }

}
