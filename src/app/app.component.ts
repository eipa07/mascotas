import { Component } from '@angular/core';
import { GLOBAL } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string;
  public header_color: string;
  public year: number;

  constructor() {
    this.title = 'Mascotas Webapp';
    this.header_color = GLOBAL.header_color;
    this.year = new Date().getFullYear();
    console.log('header_color = ' + GLOBAL.header_color);
  }
}
