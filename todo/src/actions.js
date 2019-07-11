export const POSTS = "POSTS"
export const ADD_TODO = 'ADD_TODO'
export const SUBMIT_HANDLER = 'SUBMIT_HANDLER'

export function posts(event){
    return {
       type: POSTS,
       tasks : []
         
    };
}

export function addTodo(text){
       let newTodo = {
           todo: text,
           complete: false
       }
      return { type: ADD_TODO, payload: newTodo }
    }





