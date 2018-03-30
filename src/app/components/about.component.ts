import { Component } from '@angular/core';
import { InformacionService } from '../services/informacion.service';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'about',
    templateUrl: '../views/about.html',
    providers: [InformacionService]
})

export class AboutComponent {

    public info_about_cargada: boolean;
    public info: Array<any>;

    constructor(
        public _info_about: InformacionService
    ) {
        this.getInfoAbout();

    }

    getInfoAbout() {
        this._info_about.getInfoAbout().subscribe(resp => {
            console.log('resp about');
            console.log(resp);
            this.info = resp;
            this.info_about_cargada = true;
        });
    }
}
