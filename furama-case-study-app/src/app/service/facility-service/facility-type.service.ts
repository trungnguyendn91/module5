import { Injectable } from '@angular/core';
import {FacilityType} from '../../model/facility/facility-type';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  private URL_FACILITY_TYPE = 'http://localhost:3000/facilityType';

  constructor(private http: HttpClient) {
  }

  getAllFacilityType(): Observable<FacilityType[]> {
    return this.http.get<FacilityType[]>(this.URL_FACILITY_TYPE)
  }

}
