import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
const ToDo = () => {
    const [newTodo, setNewTodo] = useState('');

    const todos = useSelector((state)=> state.todos)
    const dispatch = useDispatch();

    const addTodo = () => {
        dispatch({type:'ADD_TODO', payload: newTodo})
        setNewTodo('')
    }

    const toggleTodo = (index) => {
        dispatch({type: 'TOGGLE_TODO', payload :index })
    }

    const removeTodo = (index) => {
        dispatch({type: 'DELETE_TODO', payload : index})
    }
  return (
    <div>
        <h2>Todo List</h2>
        <input 
        type="text"
        value={newTodo}
        onChange={(e)=> setNewTodo(e.target.value)}
        placeholder='Add new task'
        />
        <button onClick={addTodo}>Add Todo</button>
        <ul>
            {
                todos.map((todo,index) => (
                    <li key={index}>
                        <input type="checkbox" checked={todo.completed} onChange={()=> toggleTodo(index)}/>
                        <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
                        <button onClick={()=> removeTodo(index)}>Delete</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default ToDo