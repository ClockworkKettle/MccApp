import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAMCCAccountPage } from './create-a-mcc-account.page';

describe('CreateAMCCAccountPage', () => {
  let component: CreateAMCCAccountPage;
  let fixture: ComponentFixture<CreateAMCCAccountPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAMCCAccountPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAMCCAccountPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
