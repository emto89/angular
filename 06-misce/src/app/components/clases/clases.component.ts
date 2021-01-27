import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.css']
})
export class ClasesComponent implements OnInit {

  alerta: string = "alert-info";
  loading: boolean = false;
  propiedades = {
    danger: true
  }

  constructor() { }

  ngOnInit(): void {
  }
  
  ejecutar() {
    this.loading = true;
  setTimeout ( ()=>this.loading = false,3000)

  }


}
