import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionApproDistComponent } from './solution-appro-dist.component';

describe('SolutionApproDistComponent', () => {
  let component: SolutionApproDistComponent;
  let fixture: ComponentFixture<SolutionApproDistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionApproDistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionApproDistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
