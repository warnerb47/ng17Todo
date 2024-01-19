import { Component } from '@angular/core';
import { TodoInputComponent } from '../../components/todo-input/todo-input.component';
import { TodoComponent } from '../../components/todo/todo.component';

@Component({
  selector: 'app-today-tasks',
  standalone: true,
  imports: [ TodoInputComponent, TodoComponent ],
  templateUrl: './today-tasks.component.html',
  styleUrl: './today-tasks.component.scss'
})
export class TodayTasksComponent {

}
