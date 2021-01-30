import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../../services/heroes.service";
import { HeroeModel } from "../../models/heroe.model";

import Swal from "sweetalert2";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: HeroeModel[] = [];
  cargando = true;

  constructor( private _heroeServices: HeroesService) { }

  ngOnInit(): void {
    this._heroeServices.getHeroes().subscribe(resp => {
      this.heroes = resp;
      this.cargando = false;
    });

  }
  
  private borrarHeroe(heroe: HeroeModel, i: number) {
    Swal.fire({
      title: 'Estas seguro?',
      text: `Estas seguro que deseas eliminar a ${ heroe.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si!!!'
    }).then( resp => {
      if (resp.value) {
        this.heroes.splice(i, 1);
        this._heroeServices.borrarHeroe(heroe.id).subscribe();         
        }
    })
  }

}
