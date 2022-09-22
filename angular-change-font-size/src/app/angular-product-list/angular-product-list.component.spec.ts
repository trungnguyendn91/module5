import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularProductListComponent } from './angular-product-list.component';

describe('AngularProductListComponent', () => {
  let component: AngularProductListComponent;
  let fixture: ComponentFixture<AngularProductListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularProductListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
