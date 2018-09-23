import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebResponsiveComponent } from './web-responsive.component';

describe('WebResponsiveComponent', () => {
  let component: WebResponsiveComponent;
  let fixture: ComponentFixture<WebResponsiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebResponsiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
