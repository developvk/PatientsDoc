import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctors } from '../doctors.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  url = 'https://localhost:7255/api/Doctor/';
  constructor(private http: HttpClient) { }
  getDoctorList(): Observable<Doctors[]> {
    return this.http.get<Doctors[]>(this.url + 'List');
  }
}
