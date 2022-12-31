import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionSuiviArchitecteComponent } from './solution-suivi-architecte.component';

describe('SolutionSuiviArchitecteComponent', () => {
  let component: SolutionSuiviArchitecteComponent;
  let fixture: ComponentFixture<SolutionSuiviArchitecteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionSuiviArchitecteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionSuiviArchitecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
