import {createStore} from 'redux'

//State
const intialState = {
    count: 0
}

//Reducer
function counterReducer(state = intialState, action) {
    switch (action.type){
       case 'INCREMENT' :
        return {
            ...state,
            count: state.count + 1
        }
        case 'DECREMENT' : {
            return {
                ...state,
                count: state.count -1
            }
        }
        case 'RESET' :{
            return {
                count: 0
            }
        }
        default: return state;
    }
}

//create store
const store = createStore(counterReducer)
export default store;
