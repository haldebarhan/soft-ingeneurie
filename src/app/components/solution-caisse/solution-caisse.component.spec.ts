import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionCaisseComponent } from './solution-caisse.component';

describe('SolutionCaisseComponent', () => {
  let component: SolutionCaisseComponent;
  let fixture: ComponentFixture<SolutionCaisseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionCaisseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionCaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
