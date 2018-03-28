import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'productos-list2',
    templateUrl: '../views/productos-list2.html'
})

export class ProductosList2Component {


    constructor() {
        console.log('Desde componente ProductosList2Component');
    }
}

