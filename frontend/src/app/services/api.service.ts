import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = "http://localhost/";

  constructor(private http: HttpClient) { }

  altaEmpleado(body: any){
    return this.http.post(this.api + '?action=' + body.action, body);
  }

  traerEmpleados(){
    return this.http.get(this.api + '?action=Consulta');
  }

}
