import { Component } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Producto } from '../models/producto';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'productos-list2',
    templateUrl: '../views/productos-list2.html',
    providers: [ProductoService]
})

export class ProductosList2Component {

    public titulo: string;
    public productos: Producto[];

    // La utilizo para el boton de borrar
    public confirmado;
    public cargando: boolean;
    public producto_filtrado: Array<any>;


    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ) {
        this.titulo = 'Lista de productos';
        this.confirmado = null;
        this.getProductos();
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
    }

    getProductos() {
        this.cargando = true;
        this._productoService.getProductos().subscribe(
            result => {
                if (result.code !== 200) {
                    console.log(result.message);
                } else {
                    setTimeout(() => {
                    this.productos = result.message;
                    this.cargando = false;
                    }, 500);
                }

            },
            error => {
                console.log(<any>error);
            }
        );
    }

    onDeleteProducto(id) {
        this._productoService.deleteProducto(id).subscribe(
            response => {
                if (response.code === 200) {
                    this.getProductos();
                } else {
                    alert('Error al borrar producto');
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

    borrarConfirm(id) {
        this.confirmado = id;
    }

    cancelarConfirm() {
        this.confirmado = null;
    }

}

