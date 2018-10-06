import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionWebComponent } from './solution-web.component';

describe('SolutionWebComponent', () => {
  let component: SolutionWebComponent;
  let fixture: ComponentFixture<SolutionWebComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolutionWebComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolutionWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
