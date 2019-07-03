import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdetailPage } from './bankdetail.page';

describe('BankdetailPage', () => {
  let component: BankdetailPage;
  let fixture: ComponentFixture<BankdetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankdetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankdetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
