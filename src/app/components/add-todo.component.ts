import {Component, EventEmitter, Output} from '@angular/core';
import {TodoModel} from '../models/todo.model';

@Component({
  selector: 'app-add-todo',
  template: `
    <div class="m-3">
      <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="add todo" (keyup.enter)="add($event)">
    </div>
  `,
  styles: [
  ]
})
export class AddTodoComponent {
  @Output() addTodo = new EventEmitter<string>();

  public add(e: Event) {
    const target = e.target as HTMLInputElement;
    this.addTodo.emit(target.value);
    target.value = '';
  }
}
