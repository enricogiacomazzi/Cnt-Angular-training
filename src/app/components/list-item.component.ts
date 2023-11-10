import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TodoModel} from '../models/todo.model';

@Component({
  selector: 'app-list-item',
  template: `
    <div>
      <span [class.completed]="todo.completed">{{todo.description}}</span>
      <span>
        <button class="btn btn-primary m-1" (click)="toggleCompleted.emit()"><i class="fa fa-check"></i></button>
        <button class="btn btn-danger m-1" (click)="deleteTodo.emit()"><i class="fa fa-trash"></i></button>
      </span>
    </div>
  `,
  styles: [
    `div {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }`,
    `.completed {
      text-decoration: line-through;
    }`
  ]
})
export class ListItemComponent {
  @Input() todo!: TodoModel;
  @Output() toggleCompleted = new EventEmitter();
  @Output() deleteTodo = new EventEmitter();
}
