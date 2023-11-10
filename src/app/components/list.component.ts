import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoModel} from '../models/todo.model';

@Component({
  selector: 'app-list',
  template: `
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let todo of todos">
        <app-list-item [todo]="todo"
                       (toggleCompleted)="toggleCompleted.emit(todo)"
                       (deleteTodo)="deleteTodo.emit(todo)">
        </app-list-item>
      </li>
    </ul>
  `,
  styles: [
  ]
})
export class ListComponent {
  @Input() todos!: Array<TodoModel>;
  @Output() toggleCompleted = new EventEmitter<TodoModel>();
  @Output() deleteTodo = new EventEmitter<TodoModel>();

}
