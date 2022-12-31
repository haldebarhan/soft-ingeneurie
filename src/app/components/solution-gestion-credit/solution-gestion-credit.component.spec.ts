import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionGestionCreditComponent } from './solution-gestion-credit.component';

describe('SolutionGestionCreditComponent', () => {
  let component: SolutionGestionCreditComponent;
  let fixture: ComponentFixture<SolutionGestionCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionGestionCreditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionGestionCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
