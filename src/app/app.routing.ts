import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './components/home.component';
import { ErrorComponent } from './components/error.component';
import { ProductosListComponent } from './components/productos.component';
import { ProductoAddComponent } from './components/producto-add.component';
import { ProductoDetailComponent } from './components/producto-detail.component';
import { ProductoEditComponent } from './components/producto-edit.component';
import { ProductosList2Component } from './components/productos-list2.component';
import { AboutComponent } from './components/about.component';
import { SearchComponent } from './components/search.component';


const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'productos', component: ProductosListComponent},
    {path: 'crearproducto', component: ProductoAddComponent},
    {path: 'producto/:id', component: ProductoDetailComponent},
    {path: 'editarproducto/:id', component: ProductoEditComponent},
    {path: 'productos-list2', component: ProductosList2Component},
    {path: 'about', component: AboutComponent},
    {path: 'search/:termino', component: SearchComponent},
    {path: '**', component: ErrorComponent}
];

export const appRoutingProviders: Array<any> = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
