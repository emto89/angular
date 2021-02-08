import { Component, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild(IonSegment) segment: IonSegment;
  noticias: Article[] = [];
  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  constructor(private noticiasService: NoticiasService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // this.segment.value = this.categorias[0];
    
    this.cargarNoticias(this.categorias[0]);
  }
  loadData(event) {
    this.cargarNoticias(this.segment.value, event);
  }
  cambiarCategoria(event) {
    this.noticias = [];
    this.cargarNoticias(event.detail.value);
  }

  cargarNoticias(categoria: string, event?) {
    
    this.noticiasService.getTopHeadlinesCategory(categoria).
      subscribe(resp => {
        if (resp.articles.length === 0 ) {
          event.target.complete();
          return;
        }
     
        this.noticias.push(...resp.articles);
        
        if (event) {
          event.target.complete();
        }

      });
  }
}
