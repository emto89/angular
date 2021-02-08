import { Component, Input, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Article } from '../../interfaces/interfaces';
// import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Browser,Share } from "@capacitor/core";
import { DataLocalService } from '../../services/data-local.service';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {

  @Input() noticia: Article;
  @Input() indice: number;
  constructor(private actionSheetCtrl: ActionSheetController,
    private datalocalService: DataLocalService) { }

  ngOnInit() {}

  abrirPagina() {
    // const browser = this.iab.create( this.noticia.url,'_system');
    Browser.open({ url: `${this.noticia.url}` });
  }
  async lanzarMenu() {
    const actionSheet = await this.actionSheetCtrl.create({
      buttons: [ {
        text: 'Compartir',
        icon: 'share',
        cssClass: 'action-dark',
        handler: () => {
          Share.share({
            title: this.noticia.title,
            text: this.noticia.description,
            url: this.noticia.url,
            dialogTitle:'Share'
          })
        }
      },
      {
        text: 'Favorito',
        icon: 'star',
        cssClass: 'action-dark',
        handler: () => {
          this.datalocalService.guardarNoticias(this.noticia);
        }
      },{
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        cssClass: 'action-dark',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }
}
