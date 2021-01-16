import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//IMPORTAR SERVICIOS

import { HeroesService } from "./servicios/heroes.service";

// IMPORTAR RUTAS 
import { APP_ROUTING } from "./app.routes";

// IMPORTAR COMPONENTES 
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
