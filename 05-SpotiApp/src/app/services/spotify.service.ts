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
      'Authorization': 'Bearer BQBanqyto_z-k_TU5UKGmrtG6fE4z6NKbcMKfcsJ07imqGzqqIFJ0J4-Buizj9uUzTtU1qvF-jtGb1XRYXo'
    });

    const url = `https://api.spotify.com/v1/${query}`;

    return this._http.get(url, { headers });
  }


  getNewReleases() {
     return this.getQuery('browse/new-releases?limit=15').pipe(map(data => data['albums'].items));
  }
  getArtistas(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => data['artists'].items));
  }

  getArtista(id: string) {
    return this.getQuery(`artists/${id}`);
  }

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?market=US`).pipe(map(data => data['tracks']));
  }
}
