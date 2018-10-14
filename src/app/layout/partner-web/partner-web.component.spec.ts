import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartnerWebComponent } from './partner-web.component';

describe('PartnerWebComponent', () => {
  let component: PartnerWebComponent;
  let fixture: ComponentFixture<PartnerWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartnerWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartnerWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
