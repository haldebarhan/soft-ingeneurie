import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionSuiviEntrepreneurComponent } from './solution-suivi-entrepreneur.component';

describe('SolutionSuiviEntrepreneurComponent', () => {
  let component: SolutionSuiviEntrepreneurComponent;
  let fixture: ComponentFixture<SolutionSuiviEntrepreneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionSuiviEntrepreneurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionSuiviEntrepreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
