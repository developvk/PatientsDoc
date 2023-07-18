import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Patients } from '../patients.model';

@Injectable({
  providedIn: 'root'
})
export class PatientsService {
  url = 'https://localhost:7255/api/Patient/';
  constructor(private http: HttpClient) { }
  getPatientList(): Observable<Patients[]> {
    return this.http.get<Patients[]>(this.url + 'List');
  }
  postPatientData(patientData: any): Observable<Patients> {
    const httpHeaders = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Patients>(this.url + 'CreateRecord', patientData, httpHeaders);
  }
}
