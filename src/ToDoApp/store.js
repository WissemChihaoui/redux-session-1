import {createStore} from 'redux'

//State
const initialState = {
    todos: []
}

//Reducer 
function todoReducer(state = initialState, action){
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos : [...state.todos, {completed: false, text: action.payload}]
            };
        case 'TOGGLE_TODO' : 
            return {
                ...state,
                todos : state.todos.map((todo, index) => 
                    index === action.payload ? { ...todo, completed: !todo.completed} : todo
                )
            }
        case 'DELETE_TODO' : 
            return {
                ...state,
                todos: state.todos.filter((_,index)=> index !== action.payload )
            }
        default: return state;
    }
}

//Create Store
const store = createStore(todoReducer)
export default store;