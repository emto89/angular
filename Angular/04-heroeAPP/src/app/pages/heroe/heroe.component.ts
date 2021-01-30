import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';

import { HeroeModel } from "../../models/heroe.model";
import { HeroesService } from "../../services/heroes.service";

import  Swal  from "sweetalert2";


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = new HeroeModel();  

  constructor(private _heroesServices: HeroesService,
              private _route:ActivatedRoute ) { }

  ngOnInit(): void {

    const id = this._route.snapshot.paramMap.get('id');

    if (id !== 'nuevo') {
      this._heroesServices.getHeroe(id).subscribe((resp: HeroeModel) => {
        this.heroe = resp;
        this.heroe.id = id;
      });
    }

  }

  guardar( form: NgForm) {
    
    if (form.invalid) {
      console.log('Formulario no valido');
      return;
    } 
    
    Swal.fire({
      title: 'Espere',
      text: 'Guardando Informacion',
      allowOutsideClick:false
    });
    Swal.showLoading();

    let peticion: Observable<any>;

    if (this.heroe.id) {
      peticion = this._heroesServices.actualizarHereo(this.heroe);
    } else {
      peticion = this._heroesServices.crearHeroe(this.heroe);
    }
    
    peticion.subscribe(resp => {
      Swal.fire({
        title: this.heroe.nombre,
        text: 'Se actualizo Correctamente'
      });
    } )


  }

}
