
import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ApplicationImages } from '../application-images';
import { MatDialog } from '@angular/material/dialog';
import { SentAlertToHospitalComponent } from '../components/alerts/sent-alert-to-hospital/sent-alert-to-hospital.component';


export interface HealthRecord {
  position: number;
  name: string;
  age: number;
  location: string;
  status: string;
  heartBeatRate: number;
  pulseRate: number;
  oxygenLevel: number;
  caloriesBurnt: number;
  numberOfSteps: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class HomeComponent {

  updateDataInterval;

  displayedColumns = [
    'position',
    'name', 'age', 'location', 'status', 'heartBeatRate', 
    'pulseRate', 'oxygenLevel', 'caloriesBurnt', 'numberOfSteps'];
  dataSource = new HealthRecordsDataSource();

  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  expandedElement: any;

  constructor(public appImages: ApplicationImages, public dialog: MatDialog) { 
    this.updateDataInterval = setInterval(() => { 
      this.dataSource.updateData();
      let heartRateLowRecord: HealthRecord;
      this.dataSource.data.forEach((record: HealthRecord) => {
          if(record.heartBeatRate < 40) {
            heartRateLowRecord = record;
          }
      })
      if (heartRateLowRecord) this.showpopup(heartRateLowRecord);
    }, 5000);
  }


  showpopup(record: HealthRecord) {
    const dialogRef = this.dialog.open(SentAlertToHospitalComponent, {
      data: record 
    });

    // If you want auto close popup uncomment the below snippet
    setTimeout(() => dialogRef.close(), 4500);
  }

  ngOnDestroy() {
    clearInterval(this.updateDataInterval);
  }
 
}



export class HealthRecordsDataSource extends DataSource<any> {
  
  data: HealthRecord[] = [
    { position: 1, name: 'Shruthi Chatla', age: 56, location: 'Adilabad', 
    status: 'ACTIVE', heartBeatRate: 43, pulseRate: 12, oxygenLevel: 78, caloriesBurnt: 382, numberOfSteps: 2538 },

    { position: 2, name: 'Manish', age: 55, location: 'Hyderabad', 
    status: 'ACTIVE', heartBeatRate: 80, pulseRate: 14, oxygenLevel: 75, caloriesBurnt: 105, numberOfSteps: 3538 },

    { position: 3, name: 'Satish', age: 65, location: 'Ranchi', 
    status: 'ACTIVE', heartBeatRate: 80, pulseRate: 17, oxygenLevel: 60, caloriesBurnt: 200, numberOfSteps: 3242 },

    { position: 4, name: 'Rakesh', age: 55, location: 'Hyderabad', 
    status: 'ACTIVE', heartBeatRate: 80, pulseRate: 14, oxygenLevel: 75, caloriesBurnt: 222, numberOfSteps: 2312 },

    { position: 5, name: 'Vinay', age: 55, location: 'Hyderabad', 
    status: 'ACTIVE', heartBeatRate: 80, pulseRate: 14, oxygenLevel: 75, caloriesBurnt: 332, numberOfSteps: 6423 },

    { position: 6, name: 'Aakash', age: 55, location: 'Hyderabad', 
    status: 'ACTIVE', heartBeatRate: 80, pulseRate: 14, oxygenLevel: 75, caloriesBurnt: 332, numberOfSteps: 2335 }
  ];


  constructor() {
    super();
  }
  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<HealthRecord[]> {
    const rows = [];
    this.data.forEach(element => rows.push(element, { detailRow: true, element }));
    return of(rows);
  }

  disconnect() { }

   // Random data update for demo puropse
   updateData() {
    let isAlreadyLow = false;
    this.data.forEach((record: HealthRecord) => {
      if (!isAlreadyLow) {
        record.heartBeatRate = this.getRandomInt(30, 100);
        if (record.heartBeatRate < 40 ) {
          isAlreadyLow = true;
        }
      } else {
        record.heartBeatRate = this.getRandomInt(50, 100);
      }
      record.pulseRate = this.getRandomInt(10, 30);

    });
  }

  // generates random number inbetween min and max
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  
}
