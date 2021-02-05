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

    this.noticiasService.getTopHeadlines().subscribe(resp => {
      this.noticias.push( ...resp.articles);
    });
    console.log(this.noticias);

  }


}