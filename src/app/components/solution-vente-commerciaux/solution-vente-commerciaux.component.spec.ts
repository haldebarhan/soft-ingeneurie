import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionVenteCommerciauxComponent } from './solution-vente-commerciaux.component';

describe('SolutionVenteCommerciauxComponent', () => {
  let component: SolutionVenteCommerciauxComponent;
  let fixture: ComponentFixture<SolutionVenteCommerciauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionVenteCommerciauxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionVenteCommerciauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
