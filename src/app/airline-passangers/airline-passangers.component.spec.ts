import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlinePassangersComponent } from './airline-passangers.component';
import { ViewChildren, ElementRef, QueryList } from '@angular/core';

describe('AirlinePassangersComponent', () => {
  let component: AirlinePassangersComponent;
  let fixture: ComponentFixture<AirlinePassangersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AirlinePassangersComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirlinePassangersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
