import TodoStore from '../TodoStore'

let TodoList: TodoStore = new TodoStore()

beforeEach(() => {
  TodoList = new TodoStore()
})

test('Initial todos list is empty', () => {
  expect(TodoList.todos).toEqual([])
})

test('The first call of increment() should return 1', () => {
  expect(TodoStore.increment()).toBe(0)
})

test('The id of the first todo is 1', () => {
  TodoList.addTodo('A todo')
  expect(TodoList.todos[0].id).toBe(1)
})

test('The todos[] will be length 1 after adding the first todo', () => {
  TodoList.addTodo('The first todo')
  expect(TodoList.todos.length).toBe(1)
})

test('Removing the only todo will result of a todos lenght of 0', () => {
  TodoList.addTodo('The first todo')
  TodoList.removeTodo(TodoList.todos[0])
  expect(TodoList.todos.length).toBe(0)
})

test('Updating title actually update it', () => {
  TodoList.addTodo('The first todo')
  TodoList.updateTitle(TodoList.todos[0], 'Brand new title')
  expect(TodoList.todos[0].title).toEqual('Brand new title')
})

test('Any new task has a completed field set to false', () => {
  TodoList.addTodo('The first todo')
  TodoList.addTodo('The second todo')
  expect(TodoList.todos[0].completed).toBe(false)
  expect(TodoList.todos[1].completed).toBe(false)
})

test('toggleAll will set completed field to true to any todos', () => {
  TodoList.addTodo('The first todo')
  TodoList.addTodo('The second todo')
  TodoList.toggleAll()
  expect(TodoList.todos[0].completed).toBe(true)
  expect(TodoList.todos[1].completed).toBe(true)
})

test('clearCompleted() will remove any completed todo', () => {
  TodoList.addTodo('The first todo')
  TodoList.addTodo('The second todo')
  TodoList.toggleAll()
  TodoList.clearCompleted()
  expect(TodoList.todos.length).toBe(0)
})
