import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaynavComponent } from './daynav.component';

describe('DaynavComponent', () => {
  let component: DaynavComponent;
  let fixture: ComponentFixture<DaynavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DaynavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DaynavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
