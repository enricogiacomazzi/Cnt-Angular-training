import { Component } from '@angular/core';
import {TodoService} from './services/todo.service';
import {TodoModel} from './models/todo.model';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <div class="row m-5">
        <div class="col-md-4"></div>
        <div class="col-md-4 col-sm-12">
          <app-card>
            <app-list [todos]="ts.todos" (toggleCompleted)="toggleCompleted($event)" (deleteTodo)="deleteTodo($event)"></app-list>
          </app-card>
          <app-card>
            <app-add-todo (addTodo)="ts.addTodo($event)"></app-add-todo>
          </app-card>
        </div>
        <div class="col-md-4"></div>
      </div>
    </div>
  `,
  styles: []
})
export class AppComponent {
  constructor(public ts: TodoService) {}

  public toggleCompleted(todo: TodoModel) {
    const updated: TodoModel = {...todo, completed: !todo.completed};
    this.ts.editTodo(updated);
  }

  public deleteTodo(todo: TodoModel) {
    this.ts.deleteTodo(todo.id);
  }
}
