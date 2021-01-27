import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


import { SpotifyService } from "../../services/spotify.service";


@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  topTracks: any[] = [];

  constructor(private _router: ActivatedRoute,
    private _spotify: SpotifyService)
  {
    this._router.params.subscribe(params => { 
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    })
  }

  ngOnInit(): void {
  }

  getArtista(id: string) {
    this._spotify.getArtista(id).subscribe(artista => {
      console.log(artista);
      this.artista = artista;
      // this.getTopTracks(params['id']);
    });
  }

  getTopTracks( id: string) {
    this._spotify.getTopTracks(id).subscribe(topTracks => {
      console.log(topTracks);
      this.topTracks = topTracks;
    });
  }
}
