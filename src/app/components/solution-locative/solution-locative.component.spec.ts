import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionLocativeComponent } from './solution-locative.component';

describe('SolutionLocativeComponent', () => {
  let component: SolutionLocativeComponent;
  let fixture: ComponentFixture<SolutionLocativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionLocativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionLocativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
