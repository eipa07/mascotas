import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'search',
    templateUrl: '../views/search.html'
})

export class SearchComponent {
    public termino: string;

    constructor(
        private _route: ActivatedRoute,
    ) {
        this.termino = undefined;
        _route.params.subscribe(parametro => {
            this.termino = parametro['termino'];
            console.log(this.termino);
            //  this._ps.searchProducto(this.termino);
        });
    }


}
