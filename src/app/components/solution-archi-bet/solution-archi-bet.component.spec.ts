import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionArchiBetComponent } from './solution-archi-bet.component';

describe('SolutionArchiBetComponent', () => {
  let component: SolutionArchiBetComponent;
  let fixture: ComponentFixture<SolutionArchiBetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionArchiBetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionArchiBetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
