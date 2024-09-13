import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { addTodo,toggleTodo,deleteTodo } from '../Features/todoSlice';

const TodoList = () => {
    const [newTodo, setNewTodo] = useState('')
    const todos = useSelector((state)=> state.todos.todos)
    console.log(todos);
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        if(newTodo.trim()) {
            dispatch(addTodo(newTodo))
            setNewTodo('')
        }
    }
    const handleToggleTodo = (index) => {
        dispatch(toggleTodo(index));
    }
    const handleDelete = (index) => {
        dispatch(deleteTodo(index))
    }
  return (
    <div>
        <div>
            <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} placeholder="Add new task"/>
            <button onClick={handleAddTodo}>Add Todo</button>
        </div>
        <ul>
            {
                todos.map((todo,index)=>(
                    <li key={index}>
                        <span>
                            {todo.text}
                        </span>
                        <button onClick={()=> handleToggleTodo(index)}>{todo.completed ? 'Undo' : 'Completed'} </button>
                        <button onClick={()=> handleDelete(index)}>Supprimer</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default TodoList