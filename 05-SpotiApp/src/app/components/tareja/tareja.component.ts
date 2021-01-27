import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tareja.component.html',
  styleUrls: ['./tareja.component.css']
})
export class TarejaComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(private _route: Router) { }

  ngOnInit(): void {
  }

  verArtista(item: any) {
    let artistaId;
    if (item.type === 'artist') {
      artistaId = item.id;
    } else {
      artistaId = item.artists[0].id;
    }
    console.log(artistaId);
    this._route.navigate(['/artist',artistaId])
  }

}
