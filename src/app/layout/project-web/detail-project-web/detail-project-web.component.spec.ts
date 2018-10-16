import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProjectWebComponent } from './detail-project-web.component';

describe('DetailProjectWebComponent', () => {
  let component: DetailProjectWebComponent;
  let fixture: ComponentFixture<DetailProjectWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProjectWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProjectWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
