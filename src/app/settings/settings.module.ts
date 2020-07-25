import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings.component';
import { Routes, RouterModule } from '@angular/router';

const settingsRoutes: Routes = [
  {
    path:'',
    component: SettingsComponent
  }
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(settingsRoutes)
  ],
  declarations: [SettingsComponent]
})
export class SettingsModule { }
