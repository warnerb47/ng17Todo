import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledTasksComponent } from './scheduled-tasks.component';

describe('ScheduledTasksComponent', () => {
  let component: ScheduledTasksComponent;
  let fixture: ComponentFixture<ScheduledTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScheduledTasksComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScheduledTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
