import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = "Martin Diaz";

  nombre2: string = "MaRtIn DiAz";

  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  PI: number = Math.PI;

  porcentaje: number = 0.235;

  salario: number = 123456;

  fecha: Date = new Date();

  idioma: string = "es";
  
  video = "https://www.youtube.com/embed/rOax50EDIZQ";
  
  activar: boolean = true;

  valorPromesa = new Promise<String>((resolve,reject) =>{
    setTimeout(() => {
      resolve('Llego la informacion');
    }, 4500);
  });
 

  heroe = {
    nombre:'Deadpool',
    clave: 'NoMuerto',
    edad: '35',
      direccion:{
        calle:'Primera',
        piso: 7
    }
  }
}
