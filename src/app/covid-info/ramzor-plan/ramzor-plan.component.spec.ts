import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamzorPlanComponent } from './ramzor-plan.component';

describe('RamzorPlanComponent', () => {
  let component: RamzorPlanComponent;
  let fixture: ComponentFixture<RamzorPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RamzorPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RamzorPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
