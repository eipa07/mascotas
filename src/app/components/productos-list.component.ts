import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'productos-list',
    templateUrl: '../views/productos-list.html'
})

export class ProductosListComponent {


    constructor() {
        console.log('Desde componente ProductosListComponent');
    }
}

