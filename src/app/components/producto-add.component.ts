import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { GLOBAL } from '../services/global';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'producto-add',
    templateUrl: '../views/producto-add.html',
    providers: [ProductoService]
})

export class ProductoAddComponent {
    public titulo: string;
    public producto: Producto;

    public filesToUpload;
    public resultUpload;

    public is_edit = false;


    constructor(
        private _productoService: ProductoService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.titulo = 'Crear nuevo producto';
        this.producto = new Producto(0, '', '', 0, '');
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        console.log('Producto-add component OK!!!!');
    }

    onSubmit() {
        console.log(this.producto);

        if (this.filesToUpload && this.filesToUpload.length > 0) {
            this._productoService.makeFilRequest(GLOBAL.url + 'uploadFile', [], this.filesToUpload).then((result) => {
                console.log(result);
                this.resultUpload = result;
                this.producto.imagen = this.resultUpload.filename;
                this.saveProducto();

            }, (error) => {
                console.log(error);
            });
        } else {
            this.saveProducto();
        }

    }

    saveProducto() {
        this._productoService.addProducto(this.producto).subscribe(
            response => {
                if (response.code === 200) {
                    this._router.navigate(['/productos']);
                } else {
                    console.log('Error al insertar producto:');
                    console.log(response);
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }


    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log(this.filesToUpload);
    }
}
