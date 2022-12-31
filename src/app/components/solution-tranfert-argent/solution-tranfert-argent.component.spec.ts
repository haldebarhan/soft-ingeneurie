import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionTranfertArgentComponent } from './solution-tranfert-argent.component';

describe('SolutionTranfertArgentComponent', () => {
  let component: SolutionTranfertArgentComponent;
  let fixture: ComponentFixture<SolutionTranfertArgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionTranfertArgentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionTranfertArgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
