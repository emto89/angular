import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  mostrar = true;

  frase: any = {
    mensaje : 'un granpoder requiere de una gran responsabilidad', 
    autor: 'Ben Parker'
  }
 
  personajes: string[] = ['Spiderman','Venom','Dr. Octopus']
  constructor() { }

  ngOnInit(): void {
  }

}
