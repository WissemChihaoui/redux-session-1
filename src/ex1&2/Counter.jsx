import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
const Counter = () => {
    const count = useSelector((state)=> state.count)
    const dispatch = useDispatch();
    const increment = () => {
        dispatch({type:'INCREMENT'})
    }
    const decrement = () => {
        dispatch({type:'DECREMENT'})
    }
    const reset = () => {
        dispatch({type:'RESET'})
    }

  return (
    <div>
        <button onClick={increment}>+</button>
        <span>{count}</span>
        <button onClick={decrement}>-</button>

        <button onClick={reset}>Reset to 0</button>
    </div>
  )
}

export default Counter