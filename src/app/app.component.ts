import { Component } from '@angular/core';
import { GLOBAL } from './services/global';
import { InformacionService } from './services/informacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [InformacionService]
})
export class AppComponent {
  public title: string;
  public header_color: string;
  public year: number;
  public info: Array<any>;
  public infoCargada: boolean;

  constructor(
    public _infoService: InformacionService
  ) {
      this.infoCargada = false;
      this.getInfo();
      this.title = 'Mascotas Webapp';
      this.header_color = GLOBAL.header_color;
      this.year = new Date().getFullYear();
    }

    getInfo() {
      this._infoService.getInfoPagina().subscribe(
          result => {
                  console.log('desde home');
                  console.log(result);
                  this.infoCargada = true;
                  this.info = result;
          },
          error => {
              console.log(<any>error);
          }
      );
  }

}
