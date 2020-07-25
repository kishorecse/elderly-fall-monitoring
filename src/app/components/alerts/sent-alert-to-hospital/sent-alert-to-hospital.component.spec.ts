import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentAlertToHospitalComponent } from './sent-alert-to-hospital.component';

describe('SentAlertToHospitalComponent', () => {
  let component: SentAlertToHospitalComponent;
  let fixture: ComponentFixture<SentAlertToHospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentAlertToHospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentAlertToHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
