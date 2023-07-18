import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Routes } from '@angular/router';
import { Observable } from 'rxjs';
import { Doctors } from '../doctors.model';
import { Patients } from '../patients.model';
import { PatientsService } from '../patients/patients.service';
import { DoctorsService } from './doctors.service';


@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
})
export class DoctorsComponent implements OnInit {
  patientForm = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    id_doctor: new FormControl(''),
  });
  DoctorList: Observable<Doctors[]>;
  DoctorList1: Observable<Doctors[]>;

  massage: string;
  getPatientList: any;

  patientList: Observable<Patients[]>;

  constructor(private formbulider: FormBuilder, private doctorService: DoctorsService, private patientservice: PatientsService) { }
  ngOnInit() {
    this.patientList = this.patientservice.getPatientList();
    

    /*      .subscribe((response) => {
          this.patientList = response;
       });*/
    this.getDoctorList();

  }
  getDoctorList() {
    this.DoctorList1 = this.doctorService.getDoctorList();
    this.DoctorList = this.DoctorList1;
  }
  routes: Routes = [
    { path: 'doctors-compoonent', component: DoctorsComponent }
  ];

  PostPatient(_patient: FormGroup) {
    const patient_own = _patient.value;
    this.patientservice.postPatientData(patient_own).subscribe(
      () => {
        this.massage = 'Data Saved Successfully';
        this.getPatientList();
      }
    );
  }
  isContentAllPatients: boolean = false;
  isContentPatientsDoc: boolean = false;
  showHideContent(container: number) {
    if (container === 1) {
      this.isContentAllPatients = !this.isContentAllPatients;
    } else if (container === 2) {
      this.isContentPatientsDoc = !this.isContentPatientsDoc;
    }
  }
}
