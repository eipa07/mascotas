import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'search',
    templateUrl: '../views/search.html',
    providers: [ProductoService]
})

export class SearchComponent {
    public termino: string;
    public productos: Producto;
    public cargando: boolean;

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ) {
        this.cargando = true;
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.getProductoByName();
    }

    getProductoByName() {
        this.termino = undefined;
        this._route.params.forEach((params: Params) => {
            // tslint:disable-next-line:prefer-const
            let termino = params['termino'];

            this._productoService.getProductoByName(termino).subscribe(
                response => {
                    // tslint:disable-next-line:prefer-const
                    let resp = response;
                    if (resp['code'] === 200) {
                        this.productos = response['message'];
                        console.log(this.productos);
                        this.cargando = false;
                    } else {
                        this._router.navigate(['/productos']);
                    }
                },
                error => {
                    console.log(<any>error);
                }
            );
        });
    }


}
