import { faPenToSquare, faToggleOff, faToggleOn, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo'>
      <p className={task.completed?'completed':''}>{task.task}</p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare} onClick={()=>editTodo(task.id)}/>
        {task.completed ? <FontAwesomeIcon icon={faToggleOn} onClick={()=> toggleComplete(task.id)}/> : <FontAwesomeIcon icon={faToggleOff} onClick={()=> toggleComplete(task.id)}/> }
        <FontAwesomeIcon icon={faTrash}  onClick={()=>deleteTodo(task.id)}/>
      </div>
    </div>
  )
}

export default Todo
