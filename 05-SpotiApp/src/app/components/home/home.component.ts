import { Component, OnInit } from '@angular/core';
import { SpotifyService } from "../../services/spotify.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];

  constructor(private _spotify: SpotifyService) { 
    this._spotify.getNewReleases().subscribe((data: any) => {
      console.log(data);
      this.nuevasCanciones = data;
    })
  }

  ngOnInit(): void {
  }

}
