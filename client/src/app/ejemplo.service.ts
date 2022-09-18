import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EjemploService {

  contador: number;

  constructor(
    private http: HttpClient
  ) {
    this.contador = 0;
  }

  aumentarContador() {
    this.contador++;
  }

  obtener(){
    this.http.get<Employee[]>("http://localhost:8080/employees").subscribe(response => {
      console.log(response[0].name);

    })
  }
}
