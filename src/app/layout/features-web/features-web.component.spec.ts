import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesWebComponent } from './features-web.component';

describe('FeaturesWebComponent', () => {
  let component: FeaturesWebComponent;
  let fixture: ComponentFixture<FeaturesWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
