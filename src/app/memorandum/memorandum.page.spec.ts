import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MemorandumPage } from './memorandum.page';

describe('MemorandumPage', () => {
  let component: MemorandumPage;
  let fixture: ComponentFixture<MemorandumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MemorandumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MemorandumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
