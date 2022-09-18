import { Component, OnInit } from '@angular/core';
import { EjemploService } from '../ejemplo.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent implements OnInit {


  palabra: string = 'chuchu';


  /*
  @Autowired
  EjemploService ejemploService
  */

  constructor(
    private ejemploService: EjemploService
  ) { }

  ngOnInit(): void {
    console.log(this.ejemploService.contador);
    this.ejemploService.aumentarContador();
    console.log(this.ejemploService.contador);
  }

  getPalabra(): string {
    return this.palabra;
  }

  get palabra2() {
    return this.palabra;
  }

  get eje() {
    return this.ejemploService;
  }

}
