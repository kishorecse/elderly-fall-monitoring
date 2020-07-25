import { NgModule } from "@angular/core";

import {
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    MatRippleModule
} from '@angular/material';

import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
    imports: [
        MatSidenavModule,
        MatToolbarModule,
        MatTableModule,
        MatListModule,
        MatIconModule,
        MatRippleModule,
        MatButtonModule,
        MatDividerModule,
        MatCardModule,
        MatDialogModule
    ],
    exports: [
        MatSidenavModule,
        MatToolbarModule,
        MatTableModule,
        MatListModule,
        MatIconModule,
        MatRippleModule,
        MatButtonModule,
        MatDividerModule,
        MatCardModule,
        MatDialogModule
    ]
  })
  export class MaterialModule { }