import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSignupLoginComponent } from './account-signup-login.component';

describe('AccountSignupLoginComponent', () => {
  let component: AccountSignupLoginComponent;
  let fixture: ComponentFixture<AccountSignupLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSignupLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSignupLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
