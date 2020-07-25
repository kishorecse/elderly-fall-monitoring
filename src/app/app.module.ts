import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationImages } from './application-images';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }, 
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsModule'
  }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ApplicationImages
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
