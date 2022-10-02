import { Component, OnInit } from '@angular/core';
import {Facility} from '../../../model/facility/facility';
import {FacilityService} from '../../../service/facility-service/facility.service';


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  facilityList: Facility [] = [];
  constructor(private facilityService: FacilityService) { }
  ngOnInit() {
    this.getAll();
  }


  private getAll() {
    this.facilityList = this.facilityService.getAllFacility();
  }
}
