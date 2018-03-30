import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'home',
    templateUrl: '../views/home.html'
})

export class HomeComponent {
    public titulo: string;

    constructor() {
        this.titulo = 'Bienvenido al Webapp de mascotas';
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        // console.log('HomeComponent ok');
    }
}
