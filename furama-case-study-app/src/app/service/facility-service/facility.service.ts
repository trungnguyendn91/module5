import { Injectable } from '@angular/core';
import {Facility} from '../../model/facility/facility';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  private URL_FACILITY = 'http://localhost:3000/facility';

  constructor(private http: HttpClient) {
  }

  getAllFacility(): Observable<Facility[]> {
    return this.http.get<Facility[]>(this.URL_FACILITY)
  }

  findById(id: number): Observable<Facility> {
    return this.http.get<Facility>(this.URL_FACILITY + '/' + id)
  }

  deleteFacility(id: any): Observable<Facility> {
    return this.http.delete<Facility>(this.URL_FACILITY + '/' + id)
  }

  saveFacility(facility: Facility): Observable<Facility> {
    return this.http.post<Facility>(this.URL_FACILITY, facility)
  }

  editFacility(id: number, facility): Observable<Facility> {
    return this.http.patch<Facility>(this.URL_FACILITY + '/' + id, facility)
  }
}
