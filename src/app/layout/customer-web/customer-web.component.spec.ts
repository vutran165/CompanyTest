import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerWebComponent } from './customer-web.component';

describe('CustomerWebComponent', () => {
  let component: CustomerWebComponent;
  let fixture: ComponentFixture<CustomerWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
