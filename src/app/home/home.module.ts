import { NgModule } from "@angular/core";
import { HomeComponent } from "./home.component";
import { MaterialModule } from "../material.module";
import { Routes, RouterModule } from "@angular/router";
import { ApplicationImages } from "../application-images";
import { CommonModule } from "@angular/common";
import { SentAlertToHospitalComponent } from "../components/alerts/sent-alert-to-hospital/sent-alert-to-hospital.component";

const homeRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
]

@NgModule({
    declarations: [HomeComponent , SentAlertToHospitalComponent],
    imports: [MaterialModule, RouterModule.forChild(homeRoutes), CommonModule],
    exports: [HomeComponent],
    entryComponents: [SentAlertToHospitalComponent],
    providers: [ApplicationImages]
})
export class HomeModule {}