import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClasesComponent } from './components/clases/clases.component';
import { CssComponent } from './components/css/css.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { ResaltarDirective } from './diretives/resaltar.directive';

import { APP_ROUTING } from "./app.routes";
import { UsuarioNuevoComponent } from './components/usuario/usuario-nuevo.component';
import { UsuarioEditarComponent } from './components/usuario/usuario-editar.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    ClasesComponent,
    CssComponent,
    HomeComponent,
    UsuarioComponent,
    NavbarComponent,
    NgStyleComponent,
    NgSwitchComponent,
    ResaltarDirective,
    UsuarioNuevoComponent,
    UsuarioEditarComponent,
    UsuarioDetalleComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
