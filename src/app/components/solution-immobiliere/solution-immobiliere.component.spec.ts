import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionImmobiliereComponent } from './solution-immobiliere.component';

describe('SolutionImmobiliereComponent', () => {
  let component: SolutionImmobiliereComponent;
  let fixture: ComponentFixture<SolutionImmobiliereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionImmobiliereComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionImmobiliereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
