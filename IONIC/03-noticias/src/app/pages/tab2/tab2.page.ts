import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

  constructor() {}


  cambiarCategoria(event) {
    return '';
  }
}
