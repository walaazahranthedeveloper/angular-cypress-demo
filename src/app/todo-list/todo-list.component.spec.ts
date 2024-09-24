import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TodoListComponent } from './todo-list.component';
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';

describe('TodoListComponent', () => {
  let component: TodoListComponent;
  let fixture: ComponentFixture<TodoListComponent>;
  let todoService: TodoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [TodoListComponent],
      providers: [TodoService]
    }).compileComponents();

    fixture = TestBed.createComponent(TodoListComponent);
    component = fixture.componentInstance;
    todoService = TestBed.inject(TodoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should add a todo', () => {
    component.newTodoTitle = 'New Task';
    component.addTodo();
    expect(component.todos.length).toBe(3);
    expect(component.todos[2].title).toBe('New Task');
  });

  it('should remove a todo', () => {
    component.removeTodo(1);
    expect(component.todos.length).toBe(1);
  });
});
