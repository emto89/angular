import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  
  componentes: Componente[] = [
    {
      icon: 'magnet',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert',
      name: 'Alerta',
      redirectTo: '/alert'
    },
    {
      icon: 'person',
      name: 'Avatar',
      redirectTo: '/avatar'
    }, {
      icon: 'radio-button-off',
      name: 'Button',
      redirectTo:'/button'

    },
    {
      icon: 'card-outline',
      name: 'Card',
      redirectTo:'/card'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}

interface Componente { 
  icon: string;
  name: string;
  redirectTo: string;

}
