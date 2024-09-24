import { Injectable } from '@angular/core';

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Write Cypress Tests', completed: false }
  ];

  // Get all to-dos
  getTodos(): Todo[] {
    return [...this.todos];
  }

  // Add a new to-do
  addTodo(title: string): void {
    const newTodo: Todo = {
      id: this.todos.length + 1,
      title,
      completed: false
    };
    this.todos.push(newTodo);
  }

  // Mark a to-do as completed
  completeTodo(id: number): void {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      todo.completed = true;
    }
  }

  // Remove a to-do
  removeTodo(id: number): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
