import { ADD_TODO } from "./actions";




let initialState = {
    todos: []
};

export default function reducer(state = initialState, action) {
        switch(action.type){
            case ADD_TODO:
            let newTodos = [...state.todos, action.payload]
            return Object.assign({}, state, {todos: newTodos});       
            default: return state
        }
        
    
}