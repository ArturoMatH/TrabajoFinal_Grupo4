import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { CestaComponent } from './pages/cesta/cesta.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { SesionComponent } from './pages/sesion/sesion.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CollectionNewComponent } from './access/collection/collection-new/collection-new.component';
import { ProductoNewComponent } from './access/producto/producto-new/producto-new.component';

import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    CestaComponent,
    ContactusComponent,
    AboutusComponent,
    SesionComponent,
    CollectionComponent,
    ProductoComponent,
    CollectionNewComponent,
    ProductoNewComponent,
    CestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
