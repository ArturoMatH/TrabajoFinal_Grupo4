import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { CestaComponent } from './pages/cesta/cesta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    CestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
