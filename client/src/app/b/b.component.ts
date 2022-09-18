import { Component, OnInit } from '@angular/core';
import { EjemploService } from '../ejemplo.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent implements OnInit {


  constructor(private ejemploService: EjemploService) {

   }

  ngOnInit(): void {
  }


  get contador(){
    return this.ejemploService.contador;
  }

  aumentar(){
    this.ejemploService.aumentarContador();
  }
}
