import { Injectable } from '@angular/core';
import { Registro } from '../models/registro.model';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  guardados: Registro[] = [];

  constructor(private storage: Storage,
    private navCtrl: NavController,
    private inAppBrowser: InAppBrowser) {
    
    this.cargarRegistro();
   }


  async guardarRegistro(format: string, text: string) {
    
    await this.cargarRegistro();

    const nuevoRegistro = new Registro(format, text);
    this.guardados.unshift(nuevoRegistro);

    console.log(this.guardados);
    this.storage.set('registro', this.guardados);

  }

  async cargarRegistro() {
   
    this.guardados = await this.storage.get('registro') || [];
    this.navCtrl.navigateForward('/tabs/tab2');
    // this.storage.get('registro').then(
    //   data => this.guardados = data,
    //   error => console.log(error)
    // );
  }
  abrirRegistro(registro: Registro) {

    this.navCtrl.navigateForward('/tabs/tab2');

    switch (registro.type) {
      case 'http':
        const { Browser } = Plugins;
        // this.inAppBrowser.create(registro.text, '_system');
        Browser.open({ url: registro.text });
        break;
      case 'geo':
        console.log("Abrir Mapa");
        break;
    
      default:
        break;
    }

  }
}
