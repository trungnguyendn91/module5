import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionatyDetailComponent } from './dictionaty-detail.component';

describe('DictionatyDetailComponent', () => {
  let component: DictionatyDetailComponent;
  let fixture: ComponentFixture<DictionatyDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionatyDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionatyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
