import {Injectable} from '@angular/core';
import {TodoModel} from '../models/todo.model';


@Injectable({providedIn: 'root'})
export class TodoService {
  public todos: Array<TodoModel> = [
    {id: 1, description: 'fare la spesa', completed: false},
    {id: 2, description: 'portare a spasso fuffy', completed: true},
    {id: 3, description: 'pagare le tasse', completed: false},
  ];


  public addTodo(description: string) {
    const nextId = Math.max(...this.todos.map(x => x.id), 0) + 1;
    this.todos = [...this.todos, {id: nextId, description, completed: false}];
  }

  public editTodo(todo: TodoModel) {
    this.todos = this.todos.map(t => t.id === todo.id ? todo : t);
  }

  public deleteTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
