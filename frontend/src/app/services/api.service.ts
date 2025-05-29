import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api = "https://api.example.com/usuarios";

  constructor(private http: HttpClient) { }

  altaEmpleado(body: any){
    this.http.post(this.api, body)
    .subscribe(respuesta => {
      return respuesta;
    });
  }

}
