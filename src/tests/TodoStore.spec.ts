import TodoStore from '../TodoStore'

let Todo = new TodoStore()
test('Initial todos list is empty', () => {
  expect(Todo.todos).toEqual([])
})
