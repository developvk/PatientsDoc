import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Patients } from '../patients.model';
import { PatientsService } from './patients.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  providers: [PatientsService]

})
export class PatientsComponent implements OnInit {
 
  PatientList: Observable<Patients[]>;
    massage: string;
    patientForm: any;
  constructor(private formbulider: FormBuilder, private httpClient: HttpClient, private patientservice: PatientsService) { }
  ngOnInit() {
    this.getPatientList();

}
  getPatientList() {
    this.PatientList = this.patientservice.getPatientList();
    
  }
  PostPatient(_patient: Patients) {
    const patient_own = this.patientForm.value;
    this.patientservice.postPatientData(patient_own).subscribe(
      () => {
        this.massage = 'Data Saved Successfully';
        this.getPatientList();
        console.log('kdkdkd')
      }
    );
  }
}
