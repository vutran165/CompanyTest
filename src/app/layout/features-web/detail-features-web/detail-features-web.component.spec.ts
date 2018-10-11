import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFeaturesWebComponent } from './detail-features-web.component';

describe('DetailServicesWebComponent', () => {
  let component: DetailFeaturesWebComponent;
  let fixture: ComponentFixture<DetailFeaturesWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailFeaturesWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFeaturesWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
