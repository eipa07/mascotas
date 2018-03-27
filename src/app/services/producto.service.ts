import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import {Producto} from '../models/producto';
import {GLOBAL} from './global';

@Injectable()

export class ProductoService {
    update(arg0: any): any {
        throw new Error('Method not implemented.');
    }
    // tslint:disable-next-line:member-ordering
    public url: string;

    constructor( public _http: Http ) {
        this.url = GLOBAL.url;
    }

    getProductos() {
        return this._http.get(this.url + 'productos').map(res => res.json());
    }

    getProducto(id) {
        return this._http.get(this.url + 'producto/' + id).map(res => res.json());
    }

    addProducto(producto: Producto) {
        // tslint:disable-next-line:prefer-const
        let json = JSON.stringify(producto);
        // tslint:disable-next-line:prefer-const
        let params = 'json=' + json;
        // tslint:disable-next-line:prefer-const
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        return this._http.post(this.url + 'productos', params, {headers: headers}).map(res => res.json());

    }

    editProducto(id, producto: Producto) {
        // tslint:disable-next-line:prefer-const
        let json = JSON.stringify(producto);
        // tslint:disable-next-line:prefer-const
        let params = 'json=' + json;
        // tslint:disable-next-line:prefer-const
        let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

        return this._http.post(this.url + 'update/' + id, params, {headers: headers}).map(res => res.json());

    }

    deleteProducto(id) {
        return this._http.get(this.url + 'delete/' + id).map(res => res.json());
    }

    makeFilRequest(url: string, params: Array<string>, files: Array<File>) {
        return new Promise((resolve, reject) => {

            const formData: any = new FormData();

            const xhr = new XMLHttpRequest();

            for (let i = 0; i < files.length; i++) {
                formData.append('uploads', files[i], files[i].name);
            }

            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        resolve(JSON.parse(xhr.response));
                    } else {
                        reject(xhr.response);
                    }
                }
            };

            xhr.open('POST', url, true);
            xhr.send(formData);
        });
    }
}
