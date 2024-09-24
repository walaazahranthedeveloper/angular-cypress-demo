import { TestBed } from '@angular/core/testing';
import { TodoService } from './todo.service';

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a list of todos', () => {
    const todos = service.getTodos();
    expect(todos.length).toBe(2);
  });

  it('should add a new todo', () => {
    service.addTodo('Write tests');
    const todos = service.getTodos();
    expect(todos.length).toBe(3);
    expect(todos[2].title).toBe('Write tests');
  });

  it('should mark a todo as completed', () => {
    service.completeTodo(1);
    const todos = service.getTodos();
    expect(todos[0].completed).toBe(true);
  });

  it('should remove a todo', () => {
    service.removeTodo(1);
    const todos = service.getTodos();
    expect(todos.length).toBe(1);
  });
});
