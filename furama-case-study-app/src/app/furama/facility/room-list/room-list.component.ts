import {Component, OnInit} from '@angular/core';
import {Facility} from '../../../model/facility/facility';
import {FacilityService} from '../../../service/facility-service/facility.service';


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  facilityList: Facility [] = [];
  facilityDetail: Facility;
  delete = [];

  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.facilityService.getAllFacility().subscribe(date => {
      this.facilityList = date;
    });
  }

  detailService(id: number) {
    this.facilityService.findById(id).subscribe(data => {
      this.facilityDetail = data;
    });
  }

  facilityDelete(id: number, name: string) {
    this.delete.push(id);
    this.delete.push(name);
    return this.delete;
  }

  resetDelete() {
    this.delete = [];
  }

  deleteFacility(id: any) {
    this.facilityService.deleteFacility(id).subscribe(() => {
      this.delete = [];
    }, error => {
      console.log(error);
    }, () => {
      this.ngOnInit();
    });
  }
}
