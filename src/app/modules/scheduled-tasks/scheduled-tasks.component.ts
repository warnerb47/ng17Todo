import { Component } from '@angular/core';
import { TodoComponent } from '../../components/todo/todo.component';

@Component({
  selector: 'app-scheduled-tasks',
  standalone: true,
  imports: [ TodoComponent ],
  templateUrl: './scheduled-tasks.component.html',
  styleUrl: './scheduled-tasks.component.scss'
})
export class ScheduledTasksComponent {

}
