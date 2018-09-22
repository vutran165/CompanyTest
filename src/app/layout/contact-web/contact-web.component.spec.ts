import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactWebComponent } from './contact-web.component';

describe('ContactWebComponent', () => {
  let component: ContactWebComponent;
  let fixture: ComponentFixture<ContactWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
