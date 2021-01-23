import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class SpotifyService {

  constructor(private _http: HttpClient) { }
  
  getQuery(query: string) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCtAa1ZFl2qkJEjBjCAQD8ie_rytXBWqpuF8I3-bnX9f9nIPNWKJJgAydkgblWg7f24DpV38Qjo9mYlrcA'
    });

    const url = `https://api.spotify.com/v1/${query}`;

    return this._http.get(url, { headers });
  }


  getNewReleases() {
     return this.getQuery('browse/new-releases?limit=15').pipe(map(data => data['albums'].items));
  }
  getArtista(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => data['artists'].items));
  }
}
