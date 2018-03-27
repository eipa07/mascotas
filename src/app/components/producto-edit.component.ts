import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';

import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';
import { GLOBAL } from '../services/global';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'producto-edit',
    templateUrl: '../views/producto-add.html',
    providers: [ProductoService]
})

export class ProductoEditComponent {
    public titulo: string;
    public producto: Producto;
    public filesToUpload;
    public resultUpload;
    public is_edit = true;

    constructor(
        private _productoService: ProductoService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.titulo = 'Editar Producto';
        this.producto = new Producto(7, '', '', 100, '');
    }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
        console.log('Producto-details component OK!!!!!');
        this.getProducto();
    }

    onSubmit() {
        console.log(this.producto);

        if (this.filesToUpload && this.filesToUpload.length > 0) {
            this._productoService.makeFilRequest(GLOBAL.url + 'uploadFile', [], this.filesToUpload).then((result) => {
                console.log(result);
                this.resultUpload = result;
                this.producto.imagen = this.resultUpload.filename;
                this.updateProducto();

            }, (error) => {
                console.log(error);
            });
        } else {
            this.updateProducto();
        }

    }

    updateProducto() {
        this._route.params.forEach((params: Params) => {
            // tslint:disable-next-line:prefer-const
            let id = params['id'];
            this._productoService.editProducto(id, this.producto).subscribe(
                response => {
                    if (response.code === 200) {
                        this._router.navigate(['/producto', id]);
                    } else {
                        console.log('Error al insertar producto:');
                        console.log(response);
                    }
                },
                error => {
                    console.log(<any>error);
                }
            );
        });
    }


    fileChangeEvent(fileInput: any) {
        this.filesToUpload = <Array<File>>fileInput.target.files;
        console.log(this.filesToUpload);
    }

    getProducto() {
        this._route.params.forEach((params: Params) => {
            // tslint:disable-next-line:prefer-const
            let id = params['id'];

            this._productoService.getProducto(id).subscribe(
                response => {
                    if (response.code === 200) {
                        this.producto = response.message[0];
                        console.log(this.producto);
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

