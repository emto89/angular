import { Injectable } from '@angular/core';
import { Article } from '../interfaces/interfaces';
import { Storage } from "@capacitor/core";

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  noticias: Article[] = [];

  constructor() {

    this.cargarFavoritos();
   }

  guardarNoticias( noticia: Article) {

     const existe = this.noticias.find(noti => noti.title === noticia.title);

     if (!existe) {
    this.noticias.unshift(noticia);
    
         Storage.set({
            key: 'favoritos',
            value: JSON.stringify(this.noticias)
         });
    }


  }

   cargarFavoritos() {
 
     const favorito = Storage.get({ key: 'favoritos' }).then(favorito => {
       console.log('Fav', favorito.value);
       if (favorito) {
         this.noticias = JSON.parse(favorito.value);
       }
     });    
 }
}
