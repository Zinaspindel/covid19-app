import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRecoversAndDeathsComponent } from './daily-recovers-and-deaths.component';

describe('DailyRecoversAndDeathsComponent', () => {
  let component: DailyRecoversAndDeathsComponent;
  let fixture: ComponentFixture<DailyRecoversAndDeathsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyRecoversAndDeathsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyRecoversAndDeathsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
