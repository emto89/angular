import { Injectable } from '@angular/core';
import { Article } from '../interfaces/interfaces';
import { Storage } from "@capacitor/core";
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

   noticias: Article[] = [];

  constructor(public toastController: ToastController) {
    this.cargarFavoritos();
   }
  guardarNoticias( noticia: Article) {
    // console.log('Noticias Favoritas ',this.noticias);
    
      const existe = this.noticias.find(noti => noti.title === noticia.title);

      if (!existe) {
      this.noticias.unshift(noticia);
     
          Storage.set({
             key: 'favoritos',
             value: JSON.stringify(this.noticias)
          });
     }
    
     this.presentToast( 'Se guardo en favoritos' );
  }

   cargarFavoritos() {
 
     const favorito = Storage.get({ key: 'favoritos' }).then(favorito => {
       if (favorito.value != null) {
         this.noticias.unshift(JSON.parse(favorito.value));
       }
     });    
   }
  
  borrarNoticias(noticia: Article) {
    this.noticias = this.noticias.filter(noti => noti.title != noticia.title);

    Storage.set({
      key: 'favoritos',
      value: JSON.stringify(this.noticias)
    });
    this.presentToast( 'Borrado de favoritos' );
  }
  async presentToast( message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500
    });
    toast.present();
  }

  
}
