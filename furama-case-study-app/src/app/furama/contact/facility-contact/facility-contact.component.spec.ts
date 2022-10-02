import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityContactComponent } from './facility-contact.component';

describe('FacilityContactComponent', () => {
  let component: FacilityContactComponent;
  let fixture: ComponentFixture<FacilityContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacilityContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacilityContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
