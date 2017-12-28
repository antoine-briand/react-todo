import * as React from 'react'
import TodoStore from './TodoStore'
import { Todo } from './Interfaces'

interface TodoListProps {

}

interface TodoListState {
  todos: Todo[]
}

export default class TodoList extends React.Component<TodoListProps, TodoListState> {
  private store: TodoStore = new TodoStore()

  constructor(props: TodoListProps) {
    super(props)
    this.store.addTodo('Salut')
    this.store.addTodo('Les gens')
    this.state = {
      todos: this.store.todos
    }
  }

  render() {
    let {todos}  = this.state
    return <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input className="new-todo" placeholder="What needs to be done?" />
      </header>
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list">
          {todos.map(todo => {
            <li data-id="1514419536877" className="completed">
              <div className="view"><input className="toggle" type="checkbox" />
                <label>todo.title</label>
                <button className="destroy"></button>
              </div>
            </li>
          })}
        </ul>
      </section>
      <footer className="footer">
        <span className="todo-count"><strong>1</strong> item left</span>
        <ul className="filters">
          <li>
            <a href="#/" className="selected">All</a>
          </li>
          <li>
            <a href="#/active">Active</a>
          </li>
          <li>
            <a href="#/completed">Completed</a>
          </li>
        </ul>
        <button className="clear-completed">Clear completed</button>
      </footer>
    </section>
  }
}
