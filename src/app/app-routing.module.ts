import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { RegistroComponent } from "./pages/registro/registro.component";
import { CestaComponent } from "./pages/cesta/cesta.component";
import { ContactusComponent } from "./pages/contactus/contactus.component";
import { AboutusComponent } from "./pages/aboutus/aboutus.component";
import { SesionComponent } from "./pages/sesion/sesion.component";
import { CollectionComponent } from "./pages/collection/collection.component";
import { ProductoComponent } from "./pages/producto/producto.component";
import { CollectionNewComponent } from "./access/collection/collection-new/collection-new.component";
import { ProductoNewComponent } from "./access/producto/producto-new/producto-new.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'cesta', component: CestaComponent},
    { path: 'contactus', component: ContactusComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'sesion', component: SesionComponent },
    { path: 'collection', component: CollectionComponent },
    { path: 'collection/:id', component: CollectionComponent },
    { path: 'producto', component: ProductoComponent },
    { path: 'producto/:collectionId/:id', component: ProductoComponent },
    { path: ' ', redirectTo: 'home', pathMatch: 'full' },
    

    { path: 'admin/collection/new', component: CollectionNewComponent },
    { path: 'admin/producto/new', component: ProductoNewComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}