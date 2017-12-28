import * as React from 'react'
import { Todo } from './Interfaces'

interface Props {
  todo: Todo
}

interface State {

}

export default class TodoItem extends React.Component {
  render() {
    let {todo} = this.props
    return <li data-id="1514419536877" className="">
      <div className="view"><input className="toggle" type="checkbox" />
        <label>todo.title</label>
        <button className="destroy"></button>
      </div>
    </li>
  }
}
