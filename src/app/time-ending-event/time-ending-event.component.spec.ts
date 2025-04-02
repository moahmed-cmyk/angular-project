import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeEndingEventComponent } from './time-ending-event.component';

describe('TimeEndingEventComponent', () => {
  let component: TimeEndingEventComponent;
  let fixture: ComponentFixture<TimeEndingEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimeEndingEventComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimeEndingEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
