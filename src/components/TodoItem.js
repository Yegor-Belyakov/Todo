import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo,toggleTodoComplete } from './store/todoSlice'
const TodoItem = ({id, text, complited, }) => {
  const dispatch = useDispatch()
  

  return (
    <li>
      <input
              type="checkbox"
              checked={complited}
              onChange={() => dispatch(toggleTodoComplete({id}))}
            />
            <span>{text}</span>
            <span className="delete" onClick={() => dispatch(removeTodo({id}))}>
              &times;
            </span>
    </li>
  )
}

export default TodoItem