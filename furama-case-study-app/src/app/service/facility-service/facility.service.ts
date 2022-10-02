import { Injectable } from '@angular/core';
import {Facility} from '../../model/facility/facility';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityList: Facility[] = [
    {
      id: 1,
      name: 'PHÒNG SUITE HƯỚNG BIỂN',
      area: 85.8,
      cost: 10000000,
      maxPeople: 10,
      standardRoom: 'vip',
      descriptionOther: 'Có hồ bơi',
      poolArea: 500,
      numberFloor: 4,
      facilityFree: 'Karaoke',
      image: 'https://furamavietnam.com/wp-content/uploads/2018/03/Vietnam_Danang_Furama_Lagoon-Superior-twin-bed-F-370x239.jpg',
      rentType: {
        id: 1,
        name: 'year'
      },
      facilityType: {
        id: 1,
        name: 'Villa'
      }
    }];
  getAllFacility() {
    return this.facilityList;
  }
  saveProduct(facility) {
    this.facilityList.push(facility);
  }
  findById(id: number) {
    return this.facilityList.find(facility => facility.id === id);
  }
  updateProduct(id: number, facility: Facility) {
    for (let i = 0; i < this.facilityList.length; i++) {
      if (this.facilityList[i].id === id) {
        this.facilityList[i] = facility;
      }
    }
  }
  deleteProduct(id: number) {
    this.facilityList = this.facilityList.filter(facility => {
      return facility.id !== id;
    });
  }
  constructor() { }
}
