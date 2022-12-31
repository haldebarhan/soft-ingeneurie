import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionAssuranceMaladieComponent } from './solution-assurance-maladie.component';

describe('SolutionAssuranceMaladieComponent', () => {
  let component: SolutionAssuranceMaladieComponent;
  let fixture: ComponentFixture<SolutionAssuranceMaladieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionAssuranceMaladieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionAssuranceMaladieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
