import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDatesPage } from './add-dates.page';

describe('AddDatesPage', () => {
  let component: AddDatesPage;
  let fixture: ComponentFixture<AddDatesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDatesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDatesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
