import { Injectable } from "@angular/core";


@Injectable()
export class ApplicationImages {
    baseUrl = 'assets/';

    logoIcon = this.baseUrl + 'logoIcon.png';
    homeIcon = this.baseUrl + 'homeIcon.png';
    settingsIcon = this.baseUrl + 'settingsIcon.png';
    personIcon = this.baseUrl + 'personIcon.png';
    heartIcon = this.baseUrl + 'heartIcon.png';
    stepsIcon = this.baseUrl + 'stepsIcon.png';
    fireIcon = this.baseUrl + 'fireIcon.png';
    graphIcon = this.baseUrl + 'graphIcon.png';
    mapIcon = this.baseUrl + 'mapIcon.png';
    trackIcon = this.baseUrl + 'trackIcon.png';
    ambulanceIcon = this.baseUrl + 'ambulanceIcon.png';
}