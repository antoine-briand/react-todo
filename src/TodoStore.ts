import { Todo } from './Interfaces'
export default class TodoStore {
  private static i = 0
  public todos: Todo[] = []

  static increment() {
    if (this.i === undefined) {
      this.i = 0
    }
    return this.i++
  }

  addTodo(title: string): void {
    this.todos = [{
      title: title,
      completed: false,
      id: TodoStore.increment()
    }, ...this.todos]
  }

  removeTodo(todo: Todo): void {
    this.todos = this.todos.filter(t => t !== todo)
  }

  updateTitle(todo: Todo, title: string): void {
    this.todos = this.todos.map(t => t === todo ? { ...t, title } : t)
  }

  toggleAll(completed = true) {
    this.todos = this.todos.map(t => completed !== t.completed ? { ...t, completed } : t)
  }

  clearCompleted(): void {
    this.todos = this.todos.filter(t => !t.completed)
  }

  toggleTodo(todo: Todo, completed = true): void {
    this.todos = this.todos.map(t => t === todo ? { ...t, completed } : t)
  }

}
