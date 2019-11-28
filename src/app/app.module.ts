import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ServicoComponent } from './servico/servico.component';
import { ContatoComponent } from './contato/contato.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreComponent } from './sobre/sobre.component';
import { FloatbuttonComponent } from './floatbutton/floatbutton.component';
import { VagasComponent } from './vagas/vagas.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ServicoComponent,
    ContatoComponent,
    RodapeComponent,
    SobreComponent,
    FloatbuttonComponent,
    VagasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
