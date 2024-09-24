import { Component } from '@angular/core';
import { Todo, TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule,CommonModule],
  template: `
    <div class="todo-app">
      <h2>Todo List</h2>
      <input [(ngModel)]="newTodoTitle" placeholder="New todo" />
      <button (click)="addTodo()">Add Todo</button>

      <ul>
        <li *ngFor="let todo of todos">
          <span [style.text-decoration]="todo.completed ? 'line-through' : 'none'">{{ todo.title }}</span>
          <button (click)="completeTodo(todo.id)">Complete</button>
          <button (click)="removeTodo(todo.id)">Remove</button>
        </li>
      </ul>
    </div>
  `,
  styles: ``
})
export class TodoListComponent {
  todos: Todo[] = [];
  newTodoTitle: string = '';

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTodo(this.newTodoTitle);
      this.newTodoTitle = '';
      this.todos = this.todoService.getTodos();
    }
  }

  completeTodo(id: number): void {
    this.todoService.completeTodo(id);
    this.todos = this.todoService.getTodos();
  }

  removeTodo(id: number): void {
    this.todoService.removeTodo(id);
    this.todos = this.todoService.getTodos();
  }
}
