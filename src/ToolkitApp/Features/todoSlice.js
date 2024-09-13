import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
}

//Slices
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        //Action for add
        addTodo: (state, action) => {
            state.todos.push({text : action.payload, completed: false})
        },
        //Action for toggle
        toggleTodo : (state, action) => {
            const todo = state.todos[action.payload]
            if(todo){
                todo.completed = !todo.completed
            }
        },
        //Action for delete
        deleteTodo: (state, action) => {
            state.todos.splice(action.payload, 1)
        }
    }
})
//Export actions
export const {addTodo, toggleTodo , deleteTodo} = todoSlice.actions;
//Export reducer
export default todoSlice.reducer;