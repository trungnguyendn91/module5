import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {$} from 'protractor';
import {RentType} from '../../../model/facility/rent-type';
import {Router} from '@angular/router';
import {FacilityService} from '../../../service/facility-service/facility.service';
import {RentTypeService} from '../../../service/facility-service/rent-type.service';
import {FacilityTypeService} from '../../../service/facility-service/facility-type.service';
import {FacilityType} from '../../../model/facility/facility-type';

@Component({
  selector: 'app-create-facility',
  templateUrl: './create-facility.component.html',
  styleUrls: ['./create-facility.component.css']
})
export class CreateFacilityComponent implements OnInit {

  facilityForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', [Validators.required]),
    area: new FormControl('', [Validators.required, Validators.min(15)]),
    cost: new FormControl('', [Validators.required]),
    maxPeople: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
    standardRoom: new FormControl('', [Validators.required]),
    descriptionOther: new FormControl('', [Validators.required]),
    poolArea: new FormControl('', [Validators.required, Validators.min(30)]),
    numberFloor: new FormControl('', [Validators.required, Validators.min(1)]),
    facilityFree: new FormControl('', [Validators.required]),
    rentType: new FormControl('', [Validators.required]),
    facilityType: new FormControl('', [Validators.required]),
  });
  rentTypeList: RentType[] = [];
  facilityTypeList: FacilityType[] = [];

  constructor(private router: Router,
              private rentTypeService: RentTypeService,
              private facilityTypeService: FacilityTypeService,
              private facilityService: FacilityService) {
    this.rentTypeService.getAllRentType().subscribe(data => {
      this.rentTypeList = data;
    }, error => {
    }, () => {
      this.facilityTypeService.getAllFacilityType().subscribe(data => {
        this.facilityTypeList = data;
      }, error => {
      }, () => {
        this.createForm();
      });
    });
  }

  ngOnInit(): void {
  }

  private createForm() {
    this.facilityForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required, Validators.min(15)]),
      cost: new FormControl('', [Validators.required]),
      maxPeople: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      standardRoom: new FormControl('', [Validators.required]),
      descriptionOther: new FormControl('', [Validators.required]),
      poolArea: new FormControl('', [Validators.required, Validators.min(1)]),
      numberFloor: new FormControl('', [Validators.required, Validators.min(1)]),
      facilityFree: new FormControl('', [Validators.required]),
      rentType: new FormControl(''),
      facilityType: new FormControl('')
    });
    this.rentTypeService.getAllRentType().subscribe(value => {
      this.rentTypeList = value;
      this.facilityForm.patchValue({rentType: value[0]});
    });
    this.facilityTypeService.getAllFacilityType().subscribe(value => {
      this.facilityTypeList = value;
      this.facilityForm.patchValue({facilityType: value[0]});
    });
  }

  createFacility() {
    const facility = this.facilityForm.value;
    this.facilityService.saveFacility(facility).subscribe(() => {
      alert('Thêm mới thành công');
      this.router.navigateByUrl('/facility/list');
    });
  }

  selectFacility() {
    const getValue = $('#choiceFacilityType').val();
    switch (getValue) {
      case '3: Object':
        $('#standardRoom').show();
        $('#descriptionConvenience').show();
        $('#poolArea').show();
        $('#numberOfFloor').show();
        $('#facilityFree').hide();
        break;
      case '4: Object':
        $('#standardRoom').show();
        $('#descriptionConvenience').show();
        $('#poolArea').hide();
        $('#numberOfFloor').show();
        $('#facilityFree').hide();
        break;
      case '5: Object':
        $('#standardRoom').hide();
        $('#descriptionConvenience').hide();
        $('#poolArea').hide();
        $('#numberOfFloor').hide();
        $('#facilityFree').show();
        break;
    }
  }

}
