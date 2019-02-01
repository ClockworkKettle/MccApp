import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersLoginPage } from './members-login.page';

describe('MembersLoginPage', () => {
  let component: MembersLoginPage;
  let fixture: ComponentFixture<MembersLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
