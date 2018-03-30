import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'producto-detail',
    templateUrl: '../views/producto-detail.html',
    providers: [ProductoService]
})

export class ProductoDetailComponent {
    public producto: Producto;

    constructor(
        private _productoService: ProductoService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {}

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        this.getProducto();
    }

    getProducto() {
        this._route.params.forEach((params: Params) => {
            // tslint:disable-next-line:prefer-const
            let id = params['id'];

            this._productoService.getProducto(id).subscribe(
                response => {
                    if (response.code === 200) {
                        this.producto = response.message[0];
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





