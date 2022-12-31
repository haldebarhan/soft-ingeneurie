import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionHotelComponent } from './solution-hotel.component';

describe('SolutionHotelComponent', () => {
  let component: SolutionHotelComponent;
  let fixture: ComponentFixture<SolutionHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
