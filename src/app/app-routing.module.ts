import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { RegistroComponent } from "./pages/registro/registro.component";
import { CestaComponent } from "./pages/cesta/cesta.component";
import { AboutusComponent } from "./pages/aboutus/aboutus.component";
import { ContactusComponent } from "./pages/contactus/contactus.component";
import { CollectionComponent } from "./pages/collection/collection.component";
import { CategoriaComponent } from "./pages/categoria/categoria.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'aboutus', component: AboutusComponent},
    { path: 'contacus', component: ContactusComponent},
    { path: 'registro', component: RegistroComponent },
    { path: 'cesta', component: CestaComponent},
    { path: 'collection', component: CollectionComponent },
    { path: 'collection/:id',component: CollectionComponent },
    { path: 'categoria', component: CategoriaComponent},
    { path: 'categoria/:id', component: CategoriaComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}