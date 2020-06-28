import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCpanelComponent } from './item-cpanel.component';

describe('ItemCpanelComponent', () => {
  let component: ItemCpanelComponent;
  let fixture: ComponentFixture<ItemCpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
