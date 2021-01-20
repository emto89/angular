import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  nombre: string = "Martin Diaz";

  arreglo: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  PI: number = Math.PI;

  porcentaje: number = 0.235;

  salario: number = 123456;

  fecha: Date = new Date();
  
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
