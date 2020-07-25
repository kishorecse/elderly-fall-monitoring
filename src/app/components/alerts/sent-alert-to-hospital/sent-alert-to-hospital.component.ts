import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HealthRecord } from 'src/app/home/home.component';
import { ApplicationImages } from 'src/app/application-images';

@Component({
  selector: 'app-sent-alert-to-hospital',
  templateUrl: './sent-alert-to-hospital.component.html',
  styleUrls: ['./sent-alert-to-hospital.component.css']
})
export class SentAlertToHospitalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SentAlertToHospitalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: HealthRecord, public appImages: ApplicationImages) {
      console.log(data)
     }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }

}
