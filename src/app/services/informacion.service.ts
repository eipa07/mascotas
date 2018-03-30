import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class InformacionService {

  constructor(
    public http: Http,
    // Nuevo servicio de Angular 5
    public _http: HttpClient

  ) {}

  getInfoPagina(): Observable<any> {
    return this._http.get('assets/data/info.pagina.json');
  }

  getInfoAbout(): Observable<any> {
    return this._http.get('https://webapps-79c5f.firebaseio.com/equipo.json');
  }
}
