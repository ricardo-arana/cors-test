import { Component } from '@angular/core';
import { GeneratokenService } from './generatoken.service';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cors-test';
  url: string;
  tipo: string = 'POST';
  body: string;
  resultado: string;
  estado: boolean;
  constructor(private servicio: GeneratokenService) {

  }

  obtenerResultado() {
    console.log(this.url, this.tipo, this.body);
    const body: any = JSON.parse(this.body);
    console.log(this.url, this.tipo, body);
    this.servicio.generatoken(this.url, body).subscribe( resul => {
      this.resultado = JSON.stringify(resul);
      this.estado = true;
    }, err => {
      this.resultado = JSON.stringify(err);
      this.estado = false;
    });
  }
}
