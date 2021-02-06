import { Component } from '@angular/core';
import { Article } from '../../interfaces/interfaces';
import { NoticiasService } from '../../services/noticias.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  noticias: Article[] = []; 
  
  constructor(private noticiasService: NoticiasService) { }
  
  ngOnInit(): void {

    this.cargarNoticias();

  }
  loadData(event) {
    this.cargarNoticias(event);
  }

  cargarNoticias(event?) {
    
    this.noticiasService.getTopHeadlines().subscribe(resp => {
      console.log('noticias', this.noticias);
      
      if (resp.articles.length === 0 ) {
        event.target.disabled = true;
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