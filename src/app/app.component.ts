import { Component } from '@angular/core';
import { ApplicationImages } from './application-images';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sideMenu = [
    {
      menuId: 1,
      menuName: 'Home',
      routerLink: 'home',
      menuIcon: 'home'
    },
    {
      menuId: 2,
      menuName: 'Settings',
      routerLink: 'settings',
      menuIcon: 'settings'
    }
  ]

  constructor(public appImages: ApplicationImages) {

  }
}
